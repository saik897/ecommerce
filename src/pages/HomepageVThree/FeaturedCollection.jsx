import { Button, Text, Img, Heading } from "../../components";
import ProductDetails1 from "../../components/ProductDetails1";
import React, { Suspense } from "react";

const newArrivalsGrid = [
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
        Modern Classic
        <br />
        Watch
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_mask_group.png",
    productName: (
      <>
        Casual <br />
        Classic Watch
      </>
    ),
    productPrice: "$299",
  },
];
const featuredProductsGrid = [
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
        Black <br />
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
        Brief Case
      </>
    ),
    productPrice: "$299",
  },
];

export default function FeaturedCollection() {
  return (
    <>
      {/* featured collection section */}
      <div className="mt-[30px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-8 lg:px-5 md:px-5">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <Heading
              as="h2"
              className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
            >
              Featured
            </Heading>
            <a href="#" className="lg:text-[15px]">
              <Text size="texts" as="p" className="text-[18px] font-medium text-gray-800">
                View all
              </Text>
            </a>
          </div>
          <div className="flex gap-[34px] md:flex-col">
            <div className="w-full">
              <div className="grid grid-cols-2 justify-center gap-8 gap-y-[30px] md:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {featuredProductsGrid.map((d, index) => (
                    <ProductDetails1 {...d} key={"warmGrid" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
            <div className="flex w-full flex-col gap-[26px] bg-gray-50">
              <Img
                src="images/img_placeholder_400x520.png"
                alt="Placeholder Image"
                className="h-[400px] object-cover"
              />
              <div className="mx-[116px] mb-[54px] flex flex-col gap-[46px] md:mx-0">
                <div className="flex flex-col items-center gap-4">
                  <Text
                    size="textmd"
                    as="p"
                    className="text-center text-[36px] font-medium leading-[54px] text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                  >
                    <>
                      Brown <br />
                      Casual Sneaker
                    </>
                  </Text>
                  <Text
                    size="textmd"
                    as="p"
                    className="text-[36px] font-medium text-gray-500 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                  >
                    $299
                  </Text>
                </div>
                <Button shape="square" className="mx-[42px] self-stretch px-[34px] font-bold md:mx-0 sm:px-4">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="ml-8 grid w-full grid-cols-2 gap-8 md:ml-0 md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {newArrivalsGrid.map((d, index) => (
                  <ProductDetails1 {...d} key={"blueGreyGrid" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
