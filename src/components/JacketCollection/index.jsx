import { Text, Heading, Img } from "./..";
import React from "react";

export default function JacketCollection({
  jacketImage = "images/img_sweater_gray_800.svg",
  jacketTitle = "Jacket",
  collectionDescription = "Collection",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center w-full gap-4 p-[42px] md:p-5 sm:p-4 bg-gray-50`}
    >
      <Img src={jacketImage} alt="Jacket Image" className="h-[160px] w-[160px]" />
      <div className="flex flex-col items-start justify-center">
        <Heading as="h1" className="text-[36px] font-bold text-gray-800 sm:text-[30px]">
          {jacketTitle}
        </Heading>
        <Text size="textlg" as="p" className="text-[36px] font-normal text-gray-500 sm:text-[30px]">
          {collectionDescription}
        </Text>
      </div>
    </div>
  );
}
