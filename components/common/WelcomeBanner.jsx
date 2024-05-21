import React from "react";
import QuiltedImageList from "./ImageList";
import { Divider } from "@mui/material";
import Image from "next/image";

export default function WelcomeBanner(props) {
  return (
    <div data-sb-object-id={props.id} className="px-28 pt-14">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div data-sb-field-path="hometitle" className="text-5xl font-bold">
            {props.hometitle}
          </div>
          <p
            data-sb-field-path="description"
            dangerouslySetInnerHTML={{
              __html: props?.description?.replaceAll("\n", "<br/>"),
            }}
            className="mt-4 text-lg"
          ></p>
        </div>
        <div className="relative">
          {props?.image?.length > 1 ? (
            <QuiltedImageList {...props} />
          ) : (
            <Image
              data-sb-object-id={props?.image[0]?.id}
              src={props?.image[0]?.src}
              alt={props?.image[0]?.alt}
              fill
              sizes="auto"
              className="rounded-3xl object-cover"
            />
          )}
        </div>
      </div>

      <div className="my-14">
        <Divider />
      </div>
    </div>
  );
}
