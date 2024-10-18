import { Text, RatingBar, Img } from "./..";
import React from "react";

export default function ProductCard2({
  productName = (
    <>
      Black Adventure
      <br />
      Boots
    </>
  ),
  productPrice = "$299",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[14%] md:w-full gap-4`}>
      <Img src="images/img_mask_group.png" alt="Product Image" className="h-[244px] w-full object-cover" />
      <div className="mx-[22px] flex flex-col items-center gap-4 self-stretch">
        <Text size="texts" as="p" className="text-center text-[24px] font-medium leading-9 text-gray-800">
          {productName}
        </Text>
        <RatingBar
          value={4}
          isEditable={true}
          color="#f6f7fb"
          activeColor="#fae952"
          size={16}
          className="mx-[42px] flex gap-2.5"
        />
        <Text as="p" className="text-[18px] font-medium text-gray-500">
          {productPrice}
        </Text>
      </div>
    </div>
  );
}
