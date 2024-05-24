import React, { useState } from "react";

const ProductDetailPage = () => {
  const placeholderImageUrl = "https://via.placeholder.com/400";
  const [selectedImage, setSelectedImage] = useState(placeholderImageUrl);

  const additionalImages = [
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
  ];

  const relatedProducts = [
    {
      id: 1,
      title: "Leather Wallet",
      price: "$49.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Leather Belt",
      price: "$39.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Leather Shoes",
      price: "$149.99",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-3xl md:text-4xl font-bold text-gray-800">
            Tech Store
          </div>
          <div>
            <a
              href="#products"
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              Products
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 mx-2">
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto py-8">
        <nav className="text-sm mb-4">
          <ol className="list-none p-0 inline-flex items-center">
            <li className="flex items-center">
              <a
                href="/"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                Home
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-2 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 6.293a1 1 0 011.414 0L12 9.586V3a1 1 0 012 0v7a1 1 0 01-1 1h-7a1 1 0 010-2h4.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <span className="text-gray-700">Product Detail</span>
            </li>
          </ol>
        </nav>

        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={selectedImage}
                alt="Product"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="flex justify-center">
                {additionalImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-16 h-16 rounded-lg mr-2 cursor-pointer border border-gray-200"
                    onClick={() => handleImageSelect(image)}
                  />
                ))}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-3xl font-semibold mb-4 text-gray-800">
                Premium Quality Leather Jacket
              </h1>
              <p className="text-gray-700 mb-4">
                Indulge in luxury with our premium leather jacket crafted from
                the finest Italian leather. This jacket is designed to elevate
                your style and provide ultimate comfort.
              </p>
              <div className="flex items-center mb-4">
                <span className="text-gray-700 font-semibold mr-2">
                  $299.99
                </span>
                <span className="text-sm text-gray-500 line-through">
                  $399.99
                </span>
                <span className="text-green-500 ml-2">Save $100</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-2 text-gray-800">Color:</span>
                <div className="w-6 h-6 rounded-full bg-black mr-2 border border-gray-200"></div>
                <div className="w-6 h-6 rounded-full bg-brown mr-2 border border-gray-200"></div>
                <div className="w-6 h-6 rounded-full bg-gray-700 border border-gray-200"></div>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-2 text-gray-800">Size:</span>
                <select className="border border-gray-400 px-3 py-1 rounded-lg">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="xl">XL</option>
                </select>
              </div>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Related Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-auto rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Advertisement banner */}
        <div className="mt-8 mb-4 p-4 bg-white rounded-lg shadow-md text-center">
          <p className="text-gray-700 font-semibold mb-2">Special Offer</p>
          <img
            src="https://via.placeholder.com/728x90"
            alt="Advertisement"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-gray-600 mt-2">
            Get 20% off on all leather products. Use code:{" "}
            <span className="text-yellow-600 font-semibold">LEATHER20</span>
          </p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-yellow-600 transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">Tech Store Headquarters</p>
              <p className="text-gray-400 mb-2">123 Main Street</p>
              <p className="text-gray-400 mb-2">City, Country</p>
              <p className="text-gray-400 mb-2">Email: contact@example.com</p>
              <p className="text-gray-400">Phone: +1 234 567 890</p>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <p className="text-gray-400 mb-2">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-400">Saturday - Sunday: Closed</p>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-4 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-8">
          <p>&copy; 2024 Tech Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
