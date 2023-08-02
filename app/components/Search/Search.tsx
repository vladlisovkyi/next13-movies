"use client";
import React, { useState, useRef, useEffect } from "react";
import { useDebounce } from "usehooks-ts";
import SearchInput from "./SearchInput";
import SearchResultItem from "./SearchResultItem";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchedData, setSearchedData] = useState<IMovie[]>([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearched = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetchMovies();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchTerm.length > 0 && inputRef.current) {
        if (!inputRef.current.contains(event.target as Node)) {
          setSearchTerm("");
          setSearchedData([]);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchTerm]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        setSearchTerm("");
        setSearchedData([]);
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=654fecaf5f75d499377596f1d93ef894&query=${debouncedSearchTerm}`
      );
      const data = await response.json();
      setSearchedData(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-[0_1_90%] sm:flex-[0_1_70%] relative">
      <SearchInput
        ref={inputRef}
        searchTerm={searchTerm}
        handleSearched={handleSearched}
      />
      <ul
        className={`absolute bg-[#212121] z-20 w-[85vw] sm:w-full rounded-xl overflow-hidden flex flex-col gap-2 top-[60px]`}
      >
        {searchedData.slice(0, 5).map((movie) => (
          <SearchResultItem key={movie.id} {...movie} />
        ))}
      </ul>
    </div>
  );
};

export default Search;
