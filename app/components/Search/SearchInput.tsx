import React, { forwardRef } from "react";

import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  searchTerm: string;
  handleSearched: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInputComponent({ searchTerm, handleSearched }, ref) {
    return (
      <form className="w-full relative mr-2">
        <input
          ref={ref}
          value={searchTerm}
          type="text"
          onChange={handleSearched}
          placeholder="Search for movies, TV shows..."
          className="w-full rounded-3xl py-2 bg-[#212121] border border-transparent shadow-sm outline-none pl-16 pr-2 text-[#BABABA] font-semibold focus:border-[#BABABA] transition-colors duration-300"
        />
        <button className="absolute w-8 h-8 left-6 top-[50%] -translate-y-[50%]">
          <BsSearch size={22} />
        </button>
      </form>
    );
  }
);

// Set the display name for the SearchInput component
SearchInput.displayName = "SearchInput";

export default SearchInput;
