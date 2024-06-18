import Link from "next/link";
import React from "react";
import LanguageSelection from "../common/LanguageSelection";
import { useCart } from "@/context/CartContext";
import { Badge, IconButton, Tooltip } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import { useUser } from "@/context/UserContext";

const RetailHeader = (props) => {
  const { cart, cancelOrder } = useCart();
  const { logoutHandler } = useUser();
  const router = useRouter();

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
          <Tooltip title="Cart">
            <IconButton onClick={() => router.push("/cart")}>
              <Badge color="primary" badgeContent={cart?.lineItems?.length}>
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
            <IconButton
              onClick={() => {
                logoutHandler();
                cancelOrder();
              }}
            >
              <LogoutIcon color="action" />
            </IconButton>
          </Tooltip>
        </nav>
      </div>
    </header>
  );
};

export default RetailHeader;
