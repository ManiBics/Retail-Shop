import React from "react";

const FeaturedProducts = (props) => {
  return (
    <section
      data-sb-object-id={props.id}
      className="container mx-auto px-6 py-16 "
    >
      <h2
        data-sb-field-path="heading"
        className="text-4xl font-bold text-center mb-12 text-blue-900"
      >
        {props.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {props?.productDetails?.map((item) => (
          <div
            data-sb-object-id={item.id}
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={item.productImage.src}
              data-sb-object-id={item.productImage.id}
              alt="Product"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3
                data-sb-field-path="productTitle1"
                className="text-2xl font-bold"
              >
                {item.productTitle1}
              </h3>
              <div className="mt-2 text-gray-600">
                <span data-sb-field-path="currency">{item.currency}</span>

                <span data-sb-field-path="pricevalue">{item.pricevalue}</span>
              </div>
              <button
                data-sb-field-path={`${item.cartButton.id}:label`}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md transform transition-transform hover:scale-105"
              >
                {item.cartButton.label}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
