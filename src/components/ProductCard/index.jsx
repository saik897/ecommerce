import { Text, Img } from "./..";
import React from "react";

export default function ProductCard({
  productImage = "images/img_placeholder_3.png",
  productName = "Black Highheels",
  productPrice = "$299",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-4`}>
      <Img src={productImage} alt="Product Image" className="h-[250px] w-full object-cover" />
      <div className="mx-7 flex flex-col items-center justify-center gap-1.5 self-stretch">
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
