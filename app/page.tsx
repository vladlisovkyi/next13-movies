import React from "react";
import MovieList from "./components/MovieList/MovieList";
import Pagination from "./components/Pagination/Pagination";

export default async function Home() {
  return (
    <>
      <MovieList />
      <Pagination />
    </>
  );
}
