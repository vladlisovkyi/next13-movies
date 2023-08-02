import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
}
const Movie: React.FC<IMovie> = ({ id, title, poster_path }) => {
  return (
    <Link
      href={`/movies/${id}`}
      className="rounded-2xl h-[280px] w-full px-6 py-4 bg-gray-500 mb-4 block relative overflow-hidden group"
    >
      {poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          width={500}
          height={500}
          alt={title}
          className="absolute top-0 left-0 w-full h-full rounded-2xl hover:scale-105 transition-all duration-500"
        />
      ) : (
        <Image
          src={"/assets/images/movie.png"}
          width={50}
          height={50}
          alt="loading"
        />
      )}

      <div className="absolute bottom-0 left-0 translate-y-20 w-full h-20 bg-[rgba(0,0,0,0.7)] px-4 py-3 group-hover:translate-y-0 transition-all duration-200">
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default Movie;
