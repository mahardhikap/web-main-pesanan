import React from "react";
import { PaginationI } from "@/interfaces/catalog-card.interface";

interface PaginationProps extends PaginationI {
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPage,
  pageNow,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-between w-4/5 sm:w-3/5 md:w-2/5 xl:w-1/5 p-4 bg-dark shadow-md rounded-lg">
      <button
        className={`p-2 rounded-md text-sm text-white transition duration-300 ease-in-out border border-white hover:bg-premium hover:text-white ${
          pageNow === 1 ? "opacity-10 cursor-not-allowed" : ""
        }`}
        type="button"
        onClick={() => pageNow > 1 && onPageChange(pageNow - 1)}
        disabled={pageNow === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path
            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <span className="bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent font-semibold">
        Page <strong>{pageNow}</strong> of <strong>{totalPage}</strong>
      </span>

      <button
        className={`p-2 rounded-md text-sm text-white transition duration-300 ease-in-out border border-white hover:bg-premium hover:text-white ${
          pageNow === totalPage ? "opacity-10 cursor-not-allowed" : ""
        }`}
        type="button"
        onClick={() => pageNow < totalPage && onPageChange(pageNow + 1)}
        disabled={pageNow === totalPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            fill="#ffffff"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;