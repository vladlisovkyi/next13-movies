"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import getAllMovies from "@/app/lib/getAllMovies";

const Pagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchParamsPage = Number(searchParams.get("page")) || 1;
  const searchParamsType = searchParams.get("type") || "popular";
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchData = async () => {
    try {
      const fetchedMovies = await getAllMovies(
        searchParamsType,
        searchParamsPage
      );

      setTotalPages(fetchedMovies.total_pages);
    } catch (e: any) {
      throw new Error(e.message);
    }
  };

  const handlePrevPage = () => {
    if (searchParamsPage > 1) {
      router.push(
        `/movies?type=${searchParamsType}&page=${searchParamsPage - 1}`
      );
    }
  };

  const handleNextPage = () => {
    router.push(
      `/movies?type=${searchParamsType}&page=${searchParamsPage + 1}`
    );
  };

  useEffect(() => {
    fetchData();
  }, [searchParamsType, searchParamsPage]);
  return (
    <>
      {totalPages > 1 && (
        <div className="flex gap-8 items-center justify-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={searchParamsPage === 1}
            className="text-turq hover:text-teal-600 disabled:opacity-30 transition-colors duration-200"
          >
            <BsFillArrowLeftCircleFill size={48} />
          </button>

          <span>
            {searchParamsPage} / {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={searchParamsPage >= totalPages}
            className="text-turq hover:text-teal-600 disabled:opacity-30 transition-colors duration-200"
          >
            <BsFillArrowRightCircleFill size={48} />
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
