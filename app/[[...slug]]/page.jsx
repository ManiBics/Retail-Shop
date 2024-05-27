"use client";
import { useEffect, useState } from "react";
import { getPageFromSlug } from "../../utils/content";
import NotFound from "../../components/common/NotFound";
import { getLocale } from "../../utils";
import RetailHeader from "@/components/RetailShop/Header";
import CustomerSay from "@/components/RetailShop/Home/CustomerSay";
import RetailFooter from "@/components/RetailShop/Footer";
import WelcomeBanner from "@/components/RetailShop/Home/WelcomeBanner";
import FeaturedProducts from "@/components/RetailShop/Home/FeaturedProducts";
import ListingBanner from "@/components/RetailShop/Products/ListingBanner";
import ProductListing from "@/components/RetailShop/Products/ProductListing";
import CartProvider from "@/context/CartContext";

const componentMap = {
  headerSection: RetailHeader,
  stats: FeaturedProducts,
  bulletPoint: CustomerSay,
  footerSection: RetailFooter,
  brandSection: WelcomeBanner,
  listingBanner: ListingBanner,
  productListing: ProductListing,
};

export default function ComposablePage({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { locale = "en-US" } = getLocale(params?.slug);
      const slug = "/" + (params?.slug ?? [""]).join("/").replace("index", "");
      const page = await getPageFromSlug(slug, locale);
      setData(page);
    })();
  }, [params?.slug]);

  return (
    <CartProvider>
      {data?.sections?.map((section, idx) => {
        const Component = componentMap[section.type];
        if (!Component)
          return (
            <div key={idx} className="text-red-500 text-center">
              Component is missing
            </div>
          );
        return <Component key={idx} {...section} />;
      })}
      {data.error && <NotFound />}
    </CartProvider>
  );
}
