import React from "react";

const WelcomeBanner = (props) => {
  return (
    <section
      className="bg-cover bg-center h-96"
      data-sb-object-id={props.bannerImage.id}
      style={{
        backgroundImage: `url(${props.bannerImage.src})`,
      }}
    >
      <div
        data-sb-object-id={props.id}
        className="container mx-auto px-6 h-full flex items-center justify-center"
      >
        <div className="text-center bg-white bg-opacity-50 p-8 rounded-lg">
          <h1
            className="text-5xl font-extrabold text-blue-900"
            data-sb-field-path="title"
          >
            {props.title}
          </h1>
          <p data-sb-field-path="description" className="text-blue-900 mt-4">
            {props.description}
          </p>

          {props.button && (
            <button
              data-sb-field-path={`${props.button.id}:name`}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg transform transition-transform hover:scale-105"
            >
              {props.button.name}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
