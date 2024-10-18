import { Text, Heading } from "../../components";
import ProductCard2 from "../../components/ProductCard2";
import React, { Suspense } from "react";

const footwearList = [
  {
    productName: (
      <>
        Black Adventure
        <br />
        Boots
      </>
    ),
    productPrice: "$299",
  },
  {
    productName: (
      <>
        Black Formal
        <br />
        Highheels
      </>
    ),
    productPrice: "$299",
  },
  {
    productName: (
      <>
        Brown <br />
        Casual Shoes
      </>
    ),
    productPrice: "$299",
  },
  {
    productName: (
      <>
        Gray <br />
        Longpants
      </>
    ),
    productPrice: "$299",
  },
  {
    productName: (
      <>
        Green
        <br />
        Sport Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productName: (
      <>
        Blue Denim <br />
        Skirt
      </>
    ),
    productPrice: "$299",
  },
];

export default function PopularThisWeek() {
  return (
    <>
      {/* popular this week section */}
      <div className="mt-[102px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-7 lg:px-5 md:px-5">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <Heading
              as="h2"
              className="self-center text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
            >
              Popular this Week
            </Heading>
            <a href="#" className="mt-2 lg:text-[15px]">
              <Text size="texts" as="p" className="text-[18px] font-medium text-gray-800">
                View all
              </Text>
            </a>
          </div>
          <div className="flex gap-8 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {footwearList.map((d, index) => (
                <ProductCard2 {...d} key={"productList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
