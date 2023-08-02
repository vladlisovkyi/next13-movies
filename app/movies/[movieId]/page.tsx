import getAllMovies from "@/app/lib/getAllMovies";
import getMovie from "@/app/lib/getMovie";
import React from "react";
import Image from "next/image";
import getMovieCast from "@/app/lib/getMovieCast";
import Cast from "@/app/components/Details/Cast";
import MovieInfoPanel from "@/app/components/Details/MovieInfoPanel";
interface PageProps {
  params: {
    movieId: string;
  };
}

export async function generateMetadata({ params: { movieId } }: PageProps) {
  const moviesData: Promise<IDetailMovie> = getMovie(movieId);
  const movie = await moviesData;
  return {
    title: movie.title,
    description: movie.overview,
  };
}

export default async function Page({ params: { movieId } }: PageProps) {
  const moviesData: Promise<IDetailMovie> = getMovie(movieId);
  const movie = await moviesData;
  const castData: Promise<ICastActors[]> = getMovieCast(movieId);
  const cast = await castData;

  const filterByJob = (job: string) => {
    return cast.filter((worker) => worker.known_for_department === job);
  };

  const directingData = filterByJob("Directing");
  const producingData = filterByJob("Production");
  const dataToShow = directingData.length ? directingData : producingData;

  return (
    <section className="px-6 py-5">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
        width={1000}
        height={1000}
        className="w-full lg:h-72 rounded-2xl"
      />
      <MovieInfoPanel {...movie} />
      <p className="mt-6">{movie.overview}</p>
      <Cast data={movie.production_countries} title="Production Countries" />
      <Cast data={filterByJob("Acting")} title="Actors" />
      <Cast
        data={dataToShow}
        title={filterByJob("Directing").length ? "Directing" : "Production"}
      />
    </section>
  );
}

export async function generateStaticParams() {
  const moviesData: Promise<MovieApiResponse> = getAllMovies("popular", 1);
  const { results: movies } = await moviesData;
  return movies.map((movie) => ({
    movieId: movie.id.toString(),
  }));
}
