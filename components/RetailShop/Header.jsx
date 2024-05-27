import Link from "next/link";
import React from "react";
import LanguageSelection from "../common/LanguageSelection";
import { useCart } from "@/context/CartContext";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const RetailHeader = (props) => {
  const { cart } = useCart();

  return (
    <header
      data-sb-object-id={props.id}
      className="bg-white shadow sticky top-0 z-50"
    >
      <div className="px-6 py-4 flex justify-between items-center">
        <img
          src={props.logo.src}
          alt="Logo"
          className="h-10"
          data-sb-object-id={props.logo?.id}
        />
        <nav className="space-x-6">
          {props.menuLinks.map((item) =>
            item.type === "languages" ? (
              <LanguageSelection key={item.id} {...item} />
            ) : (
              <Link
                key={item.id}
                href={item.url || "#"}
                data-sb-field-path={`${item.id}:title`}
                className="text-gray-700 hover:text-blue-600"
              >
                {item.title}
              </Link>
            )
          )}
          <Badge badgeContent={cart?.lineItems?.length} color="primary">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        </nav>
      </div>
    </header>
  );
};

export default RetailHeader;
