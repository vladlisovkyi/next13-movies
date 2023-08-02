import React from "react";
import Pagination from "@/app/components/Pagination/Pagination";
import MovieList from "../components/MovieList/MovieList";

export default function Page() {
  return (
    <>
      <MovieList />
      <Pagination />
    </>
  );
}
