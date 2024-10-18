import { Img, Text, Heading } from "../../components";
import ProductCard1 from "../../components/ProductCard1";
import ProductDetails2 from "../../components/ProductDetails2";
import React, { Suspense } from "react";

const checkeredProductsGrid = [
  { productImage: "images/img_placeholder_106x106.png", productName: "Checkered Jacket", productPrice: "$299" },
  { productImage: "images/img_placeholder_16.png", productName: "Blue Woman Denim", productPrice: "$299" },
  { productImage: "images/img_placeholder_17.png", productName: "Orange Jeans", productPrice: "$299" },
  { productImage: "images/img_placeholder_18.png", productName: "Classic Watch", productPrice: "$299" },
];
const denimAndAccessoriesGrid = [
  { productImage: "images/img_placeholder_19.png", productName: "Blue Jeans", productPrice: "$299" },
  { productImage: "images/img_placeholder_20.png", productName: "Wristwatch", productPrice: "$299" },
  { productImage: "images/img_placeholder_21.png", productName: "Elegant Jacket", productPrice: "$299" },
  { productImage: "images/img_placeholder_22.png", productName: "Gray Watch", productPrice: "$299" },
];

export default function NewArrivalsPopularWeek() {
  return (
    <>
      {/* new arrivals popular week section */}
      <div className="flex justify-center">
        <div className="container-xs flex items-center justify-center gap-3.5 lg:px-5 md:flex-col md:px-5">
          <div className="flex w-full flex-col items-center gap-[78px] lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
            <Heading
              as="h2"
              className="self-start text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
            >
              New Arrival
            </Heading>
            <div className="ml-6 grid grid-cols-2 justify-center gap-[74px] gap-y-[124px] self-stretch lg:grid-cols-2 md:ml-0 md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {checkeredProductsGrid.map((d, index) => (
                  <ProductCard1 {...d} key={"checkeredGrid" + index} />
                ))}
              </Suspense>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="lg:text-[15px]">
                <Text as="p" className="text-[18px] font-medium text-gray-800">
                  View all
                </Text>
              </a>
              <Img src="images/img_arrow_gray_800.svg" alt="Arrow Image" className="h-[30px]" />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-[72px] px-3.5 lg:gap-[72px] md:gap-[54px] sm:gap-9">
            <Heading
              as="h3"
              className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
            >
              Popular This Week
            </Heading>
            <div className="ml-6 mr-[74px] grid grid-cols-2 gap-[162px] gap-y-[120px] self-stretch lg:grid-cols-2 md:mx-0 md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {denimAndAccessoriesGrid.map((d, index) => (
                  <ProductDetails2 {...d} key={"jeansGrid" + index} />
                ))}
              </Suspense>
            </div>
            <div className="flex items-center gap-2 self-center">
              <a href="#" className="lg:text-[15px]">
                <Text as="p" className="text-[18px] font-medium text-gray-800">
                  View all
                </Text>
              </a>
              <Img src="images/img_arrow_gray_800.svg" alt="Arrow Image" className="h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
