import { useEffect } from "react";

// Pagination component
export default function Pagination({
  productsPerPage,
  totalProducts,
  setPaginate,
  currentPage,
  PreviousText,
  NextText,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setPaginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
      setPaginate(currentPage + 1);
    }
  };

  return (
    <nav className="mt-10">
      <ul className="flex justify-center">
        <li className="mx-1">
          <button
            data-sb-field-path="paginationPrevious"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md focus:outline-none"
          >
            {PreviousText}
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="mx-1">
            <button
              onClick={() => setPaginate(number)}
              className={`px-3 py-1 ${
                currentPage === number
                  ? "bg-[#1976d2] text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-md focus:outline-none`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="mx-1">
          <button
            data-sb-field-path="paginationNext"
            onClick={handleNext}
            disabled={
              currentPage === Math.ceil(totalProducts / productsPerPage)
            }
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md focus:outline-none"
          >
            {NextText}
          </button>
        </li>
      </ul>
    </nav>
  );
}
