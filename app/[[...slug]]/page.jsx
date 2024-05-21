"use client";
import { useEffect, useState } from "react";
import { getPageFromSlug } from "../../utils/content";
import NotFound from "../../components/common/NotFound";
import { getLocale } from "../../utils";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import WelcomeBanner from "@/components/common/WelcomeBanner";

const componentMap = {
  headerSection: Header,
  home: WelcomeBanner,
  footerSection: Footer,
};

export default function ComposablePage({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { locale = "en-US" } = getLocale(params?.slug);
      const slug = "/" + (params?.slug ?? [""]).join("/");
      const page = await getPageFromSlug(slug, locale);
      setData(page);
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
}
