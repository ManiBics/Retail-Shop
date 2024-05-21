import Image from "next/image";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EastIcon from "@mui/icons-material/East";
import { Divider } from "@mui/material";

const GetImage = (props) => {
  const obj = {
    Instagram: <InstagramIcon data-sb-object-id={props.id} {...props} />,
    Facebook: <FacebookIcon data-sb-object-id={props.id} {...props} />,
    LinkedIn: <LinkedInIcon data-sb-object-id={props.id} {...props} />,
  };
  return obj[props.name];
};

export default function Footer(props) {
  return (
    <div
      data-sb-object-id={props.id}
      className="mt-14 bg-black px-28 py-24 text-white"
    >
      <div className="grid grid-flow-col auto-cols-auto ">
        <div>
          <Image
            data-sb-object-id={props.logo.id}
            src={props.logo.src}
            alt={props.logo.alt}
            height={38}
            width={162}
          />

          <div data-sb-field-path="logoDescription" className="mt-12 text-xl">
            {props.logoDescription}
          </div>

          <div className="flex mt-6">
            {props.icons.map((icon) => (
              <div
                className="p-2 mr-2 rounded-full border-solid border-2 border-white h-10 w-10 flex items-center justify-center cursor-pointer"
                key={icon.id}
              >
                <GetImage {...icon} />
              </div>
            ))}
          </div>
        </div>

        {props.titleAndLinks.map((item) => (
          <div data-sb-object-id={item.id} key={item.id} className="text-lg">
            <div data-sb-field-path="name" className="font-medium">
              {item.name}
            </div>
            <div className="mt-4">
              {item.stateItems.map((stateItem) => (
                <div
                  key={stateItem.id}
                  data-sb-object-id={stateItem.id}
                  className="flex items-center mt-3 hover:text-[#019881] cursor-pointer w-max"
                >
                  <div data-sb-field-path="title">{stateItem.title}</div>
                  <EastIcon fontSize="small" className="ml-3" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div data-sb-field-path="disclaimer" className="text-sm w-3/6 mt-16">
        {props.disclaimer}
      </div>

      <div className="my-6 bg-white">
        <Divider />
      </div>

      <div data-sb-field-path="copyRights" className="text-sm w-3/6">
        {props.copyRights}
      </div>
    </div>
  );
}
