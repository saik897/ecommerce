import { RatingBar, Text, Img } from "./..";
import React from "react";

export default function ProductDetails2({
  productImage = "images/img_placeholder_19.png",
  productName = "Blue Jeans",
  productPrice = "$299",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center w-full gap-4`}>
      <Img src={productImage} alt="Product Image" className="h-[106px] w-[106px] object-cover" />
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col items-start gap-2">
          <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800">
            {productName}
          </Text>
          <Text size="texts" as="p" className="text-[24px] font-medium text-gray-500">
            {productPrice}
          </Text>
        </div>
        <RatingBar
          value={4}
          isEditable={true}
          color="#f6f7fb"
          activeColor="#fae952"
          size={16}
          className="flex gap-2.5"
        />
      </div>
    </div>
  );
}
