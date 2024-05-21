import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

const getRowsCols = (index) => {
  let cols = 1;
  let rows = 1;
  if ((index + 1) % 2 === 0 || (index + 1) % 3 === 0) {
    rows = 2;
  }
  if ((index + 1) % 4 === 0) {
    rows = 1;
  }
  return { cols, rows };
};

export default function QuiltedImageList(props) {
  return (
    <ImageList
      sx={{ width: "auto", height: 450 }}
      variant="quilted"
      cols={2}
      rowHeight={136}
      gap={20}
    >
      {props?.image?.map((item, index) => {
        const { rows, cols } = getRowsCols(index);
        return (
          <ImageListItem key={item.id} cols={cols} rows={rows}>
            <Image
              data-sb-object-id={item.id}
              src={item.src}
              alt={item.alt}
              fill
              sizes="auto"
              className="rounded-3xl object-cover"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
