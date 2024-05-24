import React from "react";

const CustomerSay = (props) => {
  return (
    <section data-sb-object-id={props?.id} className=" py-16">
      <div className="container mx-auto px-6 text-center">
        <h2
          data-sb-field-path="text"
          className="text-4xl font-bold text-blue-900 mb-8"
        >
          {props.text}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.sectionState.map((item) => (
            <div
              data-sb-object-id={item.id}
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 border-slate-50 border-2"
            >
              <p data-sb-field-path="value" className="text-gray-700 italic">
                {item.value}
              </p>
              <h4
                data-sb-field-path="label"
                className="mt-4 font-bold text-blue-900"
              >
                {item.label}
              </h4>
              <p data-sb-field-path="status" className="text-sm text-gray-600">
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSay;
