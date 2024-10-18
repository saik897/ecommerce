import { Text, Img } from "./..";
import React from "react";

export default function ProductDetails3({
  productImage = "images/img_business_shirt_ptnj9lv.png",
  productName = "Black Briefcase",
  productPrice = "$299",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[24%] md:w-full gap-3.5 p-9 sm:p-4 bg-white-a700 shadow-xs`}
    >
      <Img src={productImage} alt="Product Image" className="h-[200px] w-[200px] object-cover" />
      <div className="mx-2 flex flex-col items-center gap-2">
        <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800">
          {productName}
        </Text>
        <Text as="p" className="text-[18px] font-medium text-gray-500">
          {productPrice}
        </Text>
      </div>
    </div>
  );
}
