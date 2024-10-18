import { Text, Img, Heading } from "../../components";
import ProductDetails1 from "../../components/ProductDetails1";
import React, { Suspense } from "react";

const jacketGrid = [
  {
    productImage: "images/img_mask_group.png",
    productName: (
      <>
        Green <br />
        Warm Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_mask_group.png",
    productName: (
      <>
        Black
        <br />
        Warm Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_mask_group.png",
    productName: (
      <>
        Blue Grey <br />
        Warm Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_mask_group.png",
    productName: (
      <>
        Blue Denim <br />
        Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_mask_group.png",
    productName: (
      <>
        Casual <br />
        Pink Shirt
      </>
    ),
    productPrice: "$299",
  },
  { productImage: "images/img_mask_group.png", productName: "Gray T-shirt", productPrice: "$299" },
  {
    productImage: "images/img_mask_group.png",
    productName: (
      <>
        Purple <br />
        Warm Jacket
      </>
    ),
    productPrice: "$299",
  },
  { productImage: "images/img_mask_group.png", productName: "Red Flannel", productPrice: "$299" },
];

export default function FeaturedProducts() {
  return (
    <>
      {/* featured products section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[30px] lg:px-5 md:px-5">
          <div className="flex items-center justify-center">
            <Heading
              as="h2"
              className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
            >
              Featured
            </Heading>
            <div className="flex flex-1 items-center justify-end gap-2">
              <a href="#" className="lg:text-[15px]">
                <Text size="texts" as="p" className="text-[18px] font-medium text-gray-800">
                  View all
                </Text>
              </a>
              <Img src="images/img_arrow_gray_800.svg" alt="Arrow Image" className="h-[30px]" />
            </div>
          </div>
          <div className="flex items-center gap-8 md:flex-col">
            <div className="relative h-[760px] w-[34%] content-center lg:h-auto md:h-auto md:w-full">
              <Img
                src="images/img_placeholder_760x522.png"
                alt="Image Placeholder"
                className="mx-auto h-[760px] flex-1 object-cover"
              />
              <Text
                size="textmd"
                as="p"
                className="absolute left-0 right-0 top-[7%] m-auto w-[60%] text-center text-[36px] font-normal leading-[54px] text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
              >
                <span>
                  <>
                    Discover Our <br />
                  </>
                </span>
                <span className="font-bold">Featured Product</span>
              </Text>
            </div>
            <div className="ml-8 grid flex-1 grid-cols-4 gap-8 lg:grid-cols-3 md:ml-0 md:grid-cols-2 md:self-stretch sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {jacketGrid.map((d, index) => (
                  <ProductDetails1 {...d} key={"gridLayout" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
