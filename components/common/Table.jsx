import Link from "next/link";
import React from "react";

const Table = ({ rows, columns }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg ">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                key={column.title}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.length > 0 ? (
            rows.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 whitespace-nowrap text-sm "
                  >
                    {column.key === "image" ? (
                      <img
                        src={row.image}
                        alt={row.name}
                        className="h-10 w-10 rounded object-cover"
                      />
                    ) : column.key === "viewMore" ? (
                      <Link
                        href={`/order-details?id=${row.id}`}
                        className="text-[#1976d2] underline"
                      >
                        View more
                      </Link>
                    ) : (
                      row[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="12"
                className="px-6 py-4 whitespace-nowrap text-sm  text-center"
              >
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
