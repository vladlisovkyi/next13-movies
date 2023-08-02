import convertMinsToHrsMins from "@/app/lib/convertMinsToHrsMins";
import React from "react";

const MovieInfoPanel = ({
  runtime,
  title,
  release_date,
  genres,
}: IDetailMovie) => {
  return (
    <div className="flex flex-col md:flex-row items-start text-xl mt-4 gap-6">
      <div className="">
        <span className="text-turq">{title}</span> •{" "}
        {release_date.slice(0, 4)} • {convertMinsToHrsMins(runtime)}
      </div>

      <div className="flex gap-3 flex-wrap">
        {genres.map((genre) => (
          <div
            className="px-3 py-1 rounded-full border border-[#E8E8E8] text-xs flex items-center text-center justify-center"
            key={genre.id}
          >
            {genre.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieInfoPanel;
