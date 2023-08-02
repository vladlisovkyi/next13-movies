"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/app/components/Loader";
import Movie from "@/app/components/Movie/Movie";
import getAllMovies from "@/app/lib/getAllMovies";
import { useSearchParams } from "next/navigation";

const MovieList = () => {
  const searchParams = useSearchParams();
  const searchParamsPage = searchParams.get("page") || "1";
  const searchParamsType = searchParams.get("type") || "popular";

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [typeFetch, setTypeFetch] = useState<string>(searchParamsType);

  useEffect(() => {
    setCurrentPage(parseInt(searchParamsPage, 10) || 1);
    setTypeFetch(searchParamsType);
  }, [searchParamsPage, searchParamsType]);

  useEffect(() => {
    fetchData();
  }, [currentPage, typeFetch]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const fetchedMovies = await getAllMovies(typeFetch, currentPage);
      setMovies(fetchedMovies.results);
      setLoading(false);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const renderMovies = () => {
    if (loading) {
      return (
        <div className="h-[460px] flex items-center">
          <Loader />
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-content-center px-6">
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      );
    }
  };

  return <>{renderMovies()}</>;
};

export default MovieList;
