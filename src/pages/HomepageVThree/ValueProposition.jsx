import { Heading } from "../../components";
import FreeDeliveryRow from "../../components/FreeDeliveryRow";
import React, { Suspense } from "react";

const shippingAndPaymentList = [
  {
    deliveryImage: "images/img_truck.svg",
    deliveryTitle: "Free Delivery",
    deliveryDescription: (
      <>
        This free shipping
        <br />
        only for selected region
      </>
    ),
  },
  {
    deliveryImage: "images/img_card.svg",
    deliveryTitle: "Payment Method",
    deliveryDescription: (
      <>
        This free shipping
        <br />
        only for selected region
      </>
    ),
  },
  {
    deliveryImage: "images/img_broken.svg",
    deliveryTitle: "Warranty",
    deliveryDescription: (
      <>
        This free shipping
        <br />
        only for selected region
      </>
    ),
  },
  {
    deliveryImage: "images/img_support.svg",
    deliveryTitle: "Customer Support ",
    deliveryDescription: (
      <>
        This free shipping
        <br />
        only for selected region
      </>
    ),
  },
];

export default function ValueProposition() {
  return (
    <>
      {/* value proposition section */}
      <div className="relative mt-[100px] h-[362px] self-stretch">
        <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 justify-center bg-gray-800 py-14 md:py-5 sm:py-4">
          <div className="container-xs mb-[158px] flex lg:px-5 md:px-5">
            <Heading size="headings" as="h2" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
              Why Choose Us
            </Heading>
          </div>
        </div>
        <div className="container-xs absolute bottom-px left-0 right-0 my-auto flex gap-8 lg:px-5 md:relative md:flex-col md:px-5">
          <Suspense fallback={<div>Loading feed...</div>}>
            {shippingAndPaymentList.map((d, index) => (
              <FreeDeliveryRow {...d} key={"itemList" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
