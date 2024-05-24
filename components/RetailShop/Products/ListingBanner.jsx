import React from "react";

const ListingBanner = (props) => {
  return (
    <div
      data-sb-object-id={props.id}
      className={`relative bg-blue-200 py-8 px-4 mb-8  text-center text-blue-800 font-semibold`}
    >
      <img
        src={props.banner.src}
        data-sb-object-id={props.banner.id}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover  opacity-25"
      />
      <div data-sb-field-path="title" className="relative z-10 text-xl">
        {props.title}
      </div>
    </div>
  );
};

export default ListingBanner;
