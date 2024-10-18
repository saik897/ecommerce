import { Text, Img } from "./..";
import React from "react";

export default function ProductDetails4({
  productImage = "images/img_placeholder_4.png",
  productName = "Pink Shirt",
  productPrice = "$299",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[22%] md:w-full gap-3.5`}>
      <Img src={productImage} alt="Placeholder Image" className="h-[250px] w-full object-cover" />
      <div className="flex flex-col items-center gap-2">
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
