import { useState } from "react";
import Popover from "@mui/material/Popover";
import { useParams, useRouter } from "next/navigation";
import { getLocale } from "../../utils";

export default function LanguageSelection(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const params = useParams();
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const languageChange = (url) => {
    const { locale, newSlug } = getLocale(params?.slug, url);
    let path = "/" + newSlug?.join("/");
    if (!locale) {
      path = `${url}${path}`;
    }
    router.push(path);
    handleClose();
  };

  const { locale } = getLocale(params?.slug);
  const getLangIndex = props?.links?.findIndex((item) =>
    item?.url?.includes(locale)
  );
  const langIndex = getLangIndex !== -1 ? getLangIndex : 0;

  return (
    <div data-sb-object-id={props.id}>
      <div
        data-sb-field-path={`${props.links[langIndex].id}:title`}
        aria-describedby={id}
        onClick={handleClick}
        className="border-solid border-2 border-black text-sm font-medium px-1 cursor-pointer"
      >
        {props.links[langIndex].title}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {props.links.map((item, index) => (
          <div
            data-sb-field-path={`${item.id}:title`}
            key={item.id}
            className={`text-sm font-medium px-2 p-1 cursor-pointer ${
              index === langIndex ? "bg-slate-200" : ""
            }`}
            onClick={() => languageChange(item.url)}
          >
            {item.title}
          </div>
        ))}
      </Popover>
    </div>
  );
}
