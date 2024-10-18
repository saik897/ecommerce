import { Text, Heading } from "../../components";
import ProductDetails3 from "../../components/ProductDetails3";
import React, { Suspense } from "react";

const productDetailsList = [
  { productImage: "images/img_business_shirt_ptnj9lv.png", productName: "Black Briefcase", productPrice: "$299" },
  { productImage: "images/img_sport_j9bzxuy.png", productName: "Pink Shirt", productPrice: "$299" },
  { productImage: "images/img_placeholder_4.png", productName: "Gray T-shirt", productPrice: "$299" },
  { productImage: "images/img_placeholder_5.png", productName: "Red Flannel", productPrice: "$299" },
];

export default function NewArrivals() {
  return (
    <>
      {/* new arrivals section */}
      <div className="relative mt-[98px] h-[426px] self-stretch lg:h-auto md:h-auto">
        <div className="mt-[30px] flex w-[82%] flex-col items-start gap-4">
          <Heading size="headings" as="h2" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
            New Arrival
          </Heading>
          <Text
            size="texts"
            as="p"
            className="w-[14%] text-[18px] font-normal leading-8 text-white-a700 lg:w-full lg:px-5 lg:text-[15px] md:w-full md:px-5"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        </div>
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-center lg:px-5 md:px-5">
          <div className="flex w-full items-center md:flex-col">
            <div className="h-[426px] w-[22%] bg-gray-800" />
            <div className="relative ml-[-108px] flex flex-1 gap-[26px] md:ml-0 md:flex-col md:self-stretch">
              <Suspense fallback={<div>Loading feed...</div>}>
                {productDetailsList.map((d, index) => (
                  <ProductDetails3 {...d} key={"columnsList" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
