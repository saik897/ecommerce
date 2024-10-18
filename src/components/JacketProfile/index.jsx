import { Text, Img } from "./..";
import React from "react";

export default function JacketProfile({
  jacketImage = "images/img_sweater.svg",
  jacketDescription = "Jacket",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[14%] md:w-full gap-1.5 p-9 sm:p-4`}>
      <Img src={jacketImage} alt="Jacket Image" className="h-[96px] w-[96px]" />
      <Text as="p" className="mb-2.5 text-[18px] font-normal text-gray-500">
        {jacketDescription}
      </Text>
    </div>
  );
}
