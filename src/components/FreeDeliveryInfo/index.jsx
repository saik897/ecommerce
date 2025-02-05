import { Text, Heading, Img } from "./..";
import React from "react";

export default function FreeDeliveryInfo({
  deliveryImage = "images/img_truck.svg",
  deliveryTitle = "Free Delivery",
  deliveryDescription = (
    <>
      This free shipping
      <br />
      only for selected region
    </>
  ),
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-5`}>
      <Img src={deliveryImage} alt="Delivery Icon" className="h-[48px] w-[48px]" />
      <div className="flex w-[72%] flex-col items-start justify-center gap-1.5">
        <Heading size="headingxs" as="h6" className="text-[18px] font-bold text-gray-800">
          {deliveryTitle}
        </Heading>
        <Text as="p" className="text-[18px] font-normal leading-[27px] text-gray-500">
          {deliveryDescription}
        </Text>
      </div>
    </div>
  );
}
