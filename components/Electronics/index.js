import React from "react";

const LandingPage = () => {
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

      {/* Hero Section */}
      <header
        className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 flex items-center justify-center"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://via.placeholder.com/1920x1080)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Discover the Latest in Electronics
          </h1>
          <p className="text-lg md:text-xl mb-8">
            High-quality gadgets and devices at unbeatable prices.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </header>

      {/* Featured Products */}
      <section id="products" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Example product card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md product-card transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">
                Short description of the product.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">$99.99</span>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Example product card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md product-card transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">
                Short description of the product.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">$99.99</span>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Example product card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md product-card transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">
                Short description of the product.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">$99.99</span>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Example product card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md product-card transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">
                Short description of the product.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">$99.99</span>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Repeat the above block for more products */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Tech Store, we are driven by our passion for technology and
                innovation. Our mission is to provide our customers with the
                latest and most advanced electronics, sourced from trusted
                manufacturers around the globe. With a focus on quality and
                affordability, we strive to exceed your expectations and deliver
                an exceptional shopping experience.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 ">
              <img
                src="https://via.placeholder.com/600x400"
                alt="About Us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

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

export default LandingPage;
