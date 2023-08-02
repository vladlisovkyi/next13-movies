import React from "react";
import Link from "next/link";
import Image from "next/image";

const SearchResultItem = ({ id, poster_path, title }: IMovie) => {
  return (
    <>
      <Link href={`/movies/${id}`}>
        <li className="flex items-center cursor-pointer">
          <Image
            className="w-16 h-16 object-cover rounded-lg"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : "/assets/images/movie.png"
            }
            alt="alt"
            width={100}
            height={100}
          />
          <h4 className="ml-8 text-[#E8E8E8]">{title}</h4>
        </li>
      </Link>
    </>
  );
};

export default SearchResultItem;
