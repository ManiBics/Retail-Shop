"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Stack } from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname, useRouter } from "next/navigation";
import LanguageSelection from "./LanguageSelection";

export default function Header(props) {
  const { window } = props;
  const router = useRouter();
  const pathname = usePathname();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const triggerTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  const GetImage = (props) => {
    const obj = {
      English: (
        <div
          data-sb-object-id={props.id}
          {...props}
          className="border-solid border-2 border-black text-sm font-medium px-1 "
        >
          EN
        </div>
      ),
      Search: <SearchIcon data-sb-object-id={props.id} {...props} />,
    };
    return obj[props.name];
  };

  const handleNavigate = (url) => {
    if (url) router.push(url);
  };

  return (
    <React.Fragment>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar color="inherit" elevation={0}>
          <Toolbar
            data-sb-object-id={props.id}
            disableGutters
            className="flex-col"
          >
            <div className="bg-black text-white w-full px-28 h-10">
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                height="100%"
                spacing={4}
              >
                {props.menuLinks.map((menu) => (
                  <div
                    data-sb-field-path={`${menu.id}:title`}
                    className="font-medium text-md cursor-pointer"
                    key={menu.id}
                  >
                    {menu.title}
                  </div>
                ))}
              </Stack>
            </div>
            <Stack
              direction="row"
              className="h-28 px-28 w-full"
              justifyContent="space-between"
            >
              <div
                className="flex h-full items-center "
                onClick={() => handleNavigate(props.logoUrl || "/")}
              >
                <Image
                  data-sb-object-id={props.logo.id}
                  src={props.logo.src}
                  alt={props.logo.alt}
                  height={38}
                  width={162}
                  className="cursor-pointer"
                />
              </div>

              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                height="100%"
                spacing={4}
              >
                {props.subMenuLinks.map((menu) =>
                  menu.type === "languages" ? (
                    <LanguageSelection key={menu.id} {...menu} />
                  ) : (
                    <div
                      key={menu.id}
                      data-sb-field-path={`${menu.id}:title`}
                      className={`font-medium text-lg hover:text-[#019881] cursor-pointer ${
                        pathname === menu.url
                          ? "text-[#019881]"
                          : "text-inherit"
                      }`}
                      onClick={() => handleNavigate(menu.url)}
                    >
                      {menu.title}
                    </div>
                  )
                )}
              </Stack>
            </Stack>
            <div
              className={`w-full ${!triggerTop ? "px-28" : ""} transition-all`}
            >
              <div className="border-solid border-b border-b-black" />
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
      <div className="mb-[154px]"></div>
    </React.Fragment>
  );
}
