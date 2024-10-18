import { Text, Img } from "./..";
import React from "react";

export default function ProductCard1({
  productImage = "images/img_placeholder_106x106.png",
  productName = "Checkered Jacket",
  productPrice = "$299",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center w-full gap-4`}>
      <Img src={productImage} alt="Product Image" className="h-[106px] w-[106px] object-cover" />
      <div className="flex flex-1 flex-col items-start gap-2">
        <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800">
          {productName}
        </Text>
        <Text size="texts" as="p" className="text-[24px] font-medium text-gray-500">
          {productPrice}
        </Text>
      </div>
    </div>
  );
}
