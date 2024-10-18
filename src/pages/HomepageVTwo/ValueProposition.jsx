import FreeDeliveryInfo from "../../components/FreeDeliveryInfo";
import React, { Suspense } from "react";

const benefitsList = [
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
      <div>
        <div className="flex gap-[124px] bg-gray-50 py-16 pl-36 pr-14 lg:py-8 lg:pl-8 md:flex-col md:p-5 sm:p-4">
          <Suspense fallback={<div>Loading feed...</div>}>
            {benefitsList.map((d, index) => (
              <FreeDeliveryInfo {...d} key={"whychooseus" + index} className="w-[16%] md:w-full" />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
