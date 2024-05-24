import Link from "next/link";
import React from "react";

const RetailFooter = (props) => {
  return (
    <footer
      data-sb-object-id={props.id}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container mx-auto px-6 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <img
            src={props.logo.src}
            alt="Logo"
            className="h-10"
            data-sb-object-id={props.logo?.id}
          />
          <p data-sb-field-path="logoDescription" className="mt-4">
            {props.logoDescription}
          </p>
          <div className="mt-6">
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="ml-4 text-blue-400 hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="ml-4 text-blue-400 hover:text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="ml-4 text-blue-400 hover:text-blue-500">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="md:flex md:space-x-12">
          {props.titleAndLinks.map((item) => (
            <div
              key={item.id}
              data-sb-object-id={item.id}
              className="mb-6 md:mb-0"
            >
              <h4 data-sb-field-path="name" className="font-semibold">
                {item.name}
              </h4>
              <ul className="mt-4 space-y-2">
                {item.stateItems.map((subItem) => (
                  <li key={subItem.id} data-sb-object-id={subItem.id}>
                    <Link
                      href="#"
                      data-sb-field-path="title"
                      className="hover:underline"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 text-center text-gray-500">
        <p data-sb-field-path="copyRights">{props.copyRights}</p>
      </div>
    </footer>
  );
};

export default RetailFooter;
