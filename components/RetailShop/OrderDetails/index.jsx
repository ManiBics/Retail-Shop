import Table from "@/components/common/Table";
import { Button } from "@mui/material";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getOrderDetails } from "./apiHandler";
import { getLocale } from "@/utils";
import { getPageFromSlug } from "@/utils/content";
import { useBackDrop } from "@/context/BackDropContext";

const OrderDetails = (props) => {
  const router = useRouter();
  const [order, setOrder] = useState({ lineItems: [] });
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");
  const params = useParams();
  const [productListing, setProductListing] = useState([]);
  const [orderContentful, setOrderContentful] = useState({ lineItems: [] });
  const { showBackDrop, hideBackDrop } = useBackDrop();

  useEffect(() => {
    (async () => {
      showBackDrop();
      const { locale = "en-US" } = getLocale(params?.slug);
      const slug = "/product-listing";
      const page = await getPageFromSlug(slug, locale, "productListing");
      setProductListing(page.products);
      hideBackDrop();
    })();
  }, [params?.slug]);

  useEffect(() => {
    (async () => {
      if (orderId) {
        showBackDrop();
        const data = await getOrderDetails(orderId);
        setOrder(data);
        hideBackDrop();
      }
    })();
  }, [orderId]);

  useEffect(() => {
    if (productListing?.length && order?.lineItems?.length) {
      const lineItems = order.lineItems.map((item) => {
        const findProduct = productListing.find(
          (product) => product.productTitle === item?.variant?.sku
        );
        return {
          price: (item?.price?.value?.centAmount / 100).toFixed(2),
          name: findProduct?.productTitle1,
          quantity: item.quantity,
          image: findProduct?.productImage?.src,
          sku: item?.variant?.sku,
          id: item.id,
        };
      });
      setOrderContentful({ ...order, lineItems });
    } else if (!order || !order?.lineItems?.length) {
      setOrderContentful({ lineItems: [] });
    }
  }, [productListing, order]);

  const total = order?.lineItems?.reduce(
    (sum, item) => sum + item.price.value.centAmount,
    0
  );

  return (
    <div className="bg-white p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">{props.title}</h1>
        <div>
          <Button
            onClick={() => {
              router.push("/orders");
            }}
            size="small"
            variant="outlined"
          >
            {props.backButton.label}
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg">
          {props.orderIdField}{" "}
          <span className={`font-semibold`}>{orderContentful.id || ""}</span>
        </h2>
        <p className="text-gray-700">
          {props.date}{" "}
          <span className={`font-semibold`}>
            {orderContentful.createdAt
              ? new Date(orderContentful.createdAt).toDateString()
              : ""}
          </span>
        </p>
        <p className="text-gray-700">
          {props.status}{" "}
          <span className={`font-semibold text-green-600`}>
            {orderContentful.orderState || ""}
          </span>
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{props.itemText}</h3>
        <Table rows={orderContentful.lineItems} columns={props.itemColumn} />
      </div>
      <div className="mt-4 flex justify-end">
        <div className="text-lg font-semibold">{props.totalvaluetext}</div>
        <div className="text-lg font-semibold ml-4">
          ${(total / 100).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
