import React from "react";
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
import ViewCart from "@/components/RetailShop/Cart";
import ThankYouPage from "@/components/RetailShop/OrderPlaced";
import { useParams } from "next/navigation";
import { useBackDrop } from "@/context/BackDropContext";

const componentMap = {
  headerSection: RetailHeader,
  stats: FeaturedProducts,
  bulletPoint: CustomerSay,
  footerSection: RetailFooter,
  brandSection: WelcomeBanner,
  listingBanner: ListingBanner,
  productListing: ProductListing,
  viewCart: ViewCart,
  home: ThankYouPage,
};

const DynamicComp = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const { showBackDrop, hideBackDrop } = useBackDrop();

  useEffect(() => {
    (async () => {
      showBackDrop();
      const { locale = "en-US" } = getLocale(params?.slug);
      const slug = "/" + (params?.slug ?? [""]).join("/").replace("index", "");
      const page = await getPageFromSlug(slug, locale);
      setData(page);
      hideBackDrop();
    })();
  }, [params?.slug]);
  return (
    <div>
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
    </div>
  );
};

export default DynamicComp;
