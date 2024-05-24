import React, { useState } from "react";

// Banner component

// ProductCard component
const ProductCard = ({ product }) => {
  return (
    <div
      data-sb-object-id={product.id}
      className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
    >
      <img
        className="w-full h-64 object-cover rounded-t-md"
        src={product.productImage.src}
        alt={product.productImage.src}
        data-sb-object-id={product.productImage.id}
      />
      <div className="p-4">
        <h3
          data-sb-field-path="productTitle1"
          className="font-semibold text-lg mb-2"
        >
          {product.productTitle1}
        </h3>
        <p
          data-sb-field-path="productDescription"
          className="text-gray-700 mb-4 line-clamp-2"
        >
          {product.productDescription}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <span
              className="text-gray-900 font-semibold text-lg"
              data-sb-field-path="currency"
            >
              {product.currency}
            </span>

            <span
              data-sb-field-path="pricevalue"
              className="text-gray-900 font-semibold text-lg"
            >
              {product.pricevalue}
            </span>
          </div>
          {product.cartButton && (
            <button
              data-sb-field-path={`${product?.cartButton.id}:label`}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
            >
              {product.cartButton.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ProductList component
const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// SectionHeader component
const SectionHeader = ({ title }) => {
  return (
    <h2 data-sb-field-path="title" className="text-3xl font-semibold mb-8 mt-8">
      {title}
    </h2>
  );
};

// Pagination component
const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
  PreviousText,
  NextText,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
      paginate(currentPage + 1);
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
              onClick={() => paginate(number)}
              className={`px-3 py-1 ${
                currentPage === number
                  ? "bg-blue-600 text-white"
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
};

// BrandBanner component
const BrandBanner = (props) => {
  return (
    <div className="bg-gray-100 py-8  mt-12">
      <div className="container mx-auto flex justify-center items-center space-x-14">
        {props.brandsLogo.map((item) => (
          <img
            key={item.id}
            data-sb-object-id={item.id}
            className="h-14"
            src={item.src}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
};

// ProductListing component
const ProductListing = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("name");

  const products = props.products;
  // Filter products by search query
  const filteredProducts = products.filter((product) =>
    product.productTitle?.toLowerCase()?.includes(searchQuery.toLowerCase())
  );

  // Sort products
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortType === "name") {
      return a.productTitle.localeCompare(b.productTitle);
    } else if (sortType === "priceAsc") {
      return a.pricevalue - b.pricevalue;
    } else if (sortType === "priceDesc") {
      return b.pricevalue - a.pricevalue;
    }
    return 0;
  });

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div data-sb-object-id={props.id}>
      <div className="px-4">
        <div className="flex items-center mb-4 ">
          <input
            type="text"
            placeholder={props.searchPlaceholder}
            data-sb-field-path="searchPlaceholder"
            className="px-4 py-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            {props.sortingOptions.map((item) => (
              <option
                key={item.id}
                data-sb-field-path={`${item.id}:title`}
                value={item.description}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <SectionHeader title={props.title} />
        <ProductList products={currentProducts} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={sortedProducts.length}
          paginate={paginate}
          currentPage={currentPage}
          PreviousText={props.paginationPrevious}
          NextText={props.paginationNext}
        />
      </div>

      <BrandBanner {...props} />
    </div>
  );
};

export default ProductListing;
