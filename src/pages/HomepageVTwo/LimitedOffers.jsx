import { Text, Heading, Button, Img } from "../../components";
import TimeDisplay from "../../components/TimeDisplay";
import React, { Suspense } from "react";

const countdownTimer = [
  { timeValue: "08", timeUnit: "Hours" },
  { timeValue: "58", timeUnit: "Minutes" },
  { timeValue: "18", timeUnit: "Seconds" },
];
const countdownTimer1 = [
  { timeValue: "08", timeUnit: "Hours" },
  { timeValue: "58", timeUnit: "Minutes" },
  { timeValue: "18", timeUnit: "Seconds" },
];

export default function LimitedOffers() {
  return (
    <>
      {/* limited offers section */}
      <div className="relative h-[578px]">
        <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 justify-center bg-gray-800 py-[42px] md:py-5 sm:py-4">
          <div className="container-xs mb-[270px] flex lg:px-5 md:px-5">
            <Heading
              as="h2"
              className="text-[36px] font-bold text-white-a700 lg:text-[30px] md:text-[30px] sm:text-[28px]"
            >
              Limited Offer
            </Heading>
          </div>
        </div>
        <div className="absolute bottom-0 left-[8%] m-auto flex w-[42%] items-center justify-center gap-12 bg-gray-50 p-8 shadow-md md:relative md:flex-col sm:p-4">
          <div className="flex w-[40%] flex-col gap-8 md:w-full">
            <Img src="images/img_rectangle_45.png" alt="Product Image" className="h-[278px] object-cover" />
            <Button shape="square" className="ml-10 mr-[38px] self-stretch px-[34px] font-bold md:mx-0 sm:px-4">
              Add to Cart
            </Button>
          </div>
          <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
            <Text size="texts" as="p" className="text-[24px] font-normal text-gray-800 lg:text-[20px]">
              Limited Deals
            </Text>
            <div className="mr-6 flex gap-8 self-stretch md:mr-0 md:flex-row sm:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {countdownTimer.map((d, index) => (
                  <TimeDisplay {...d} key={"countdownList" + index} />
                ))}
              </Suspense>
            </div>
            <div className="self-stretch">
              <div className="flex flex-col items-start gap-4">
                <Heading size="headings" as="h3" className="text-[24px] font-bold text-gray-800 lg:text-[20px]">
                  Black Warm Jacket{" "}
                </Heading>
                <div className="flex flex-wrap gap-[25px] self-stretch">
                  <Text
                    size="textmd"
                    as="p"
                    className="text-[24px] font-normal text-gray-500 line-through lg:text-[20px]"
                  >
                    $299
                  </Text>
                  <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800 lg:text-[20px]">
                    $199
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-[8%] m-auto flex w-[42%] items-center justify-center gap-12 bg-gray-50 p-8 shadow-md md:relative md:flex-col sm:p-4">
          <div className="flex w-[40%] flex-col gap-8 md:w-full">
            <Img src="images/img_rectangle_45_278x278.png" alt="Product Image" className="h-[278px] object-cover" />
            <Button shape="square" className="ml-10 mr-[38px] self-stretch px-[34px] font-bold md:mx-0 sm:px-4">
              Add to Cart
            </Button>
          </div>
          <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
            <Text size="texts" as="p" className="text-[24px] font-normal text-gray-800 lg:text-[20px]">
              Limited Deals
            </Text>
            <div className="mr-6 flex gap-8 self-stretch md:mr-0 md:flex-row sm:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {countdownTimer1.map((d, index) => (
                  <TimeDisplay {...d} key={"countdownTimer2" + index} />
                ))}
              </Suspense>
            </div>
            <div className="self-stretch">
              <div className="flex flex-col items-start gap-3">
                <Heading size="headings" as="h4" className="text-[24px] font-bold text-gray-800 lg:text-[20px]">
                  Casual Grey Shoes
                </Heading>
                <div className="flex flex-wrap gap-[23px] self-stretch">
                  <Text
                    size="textmd"
                    as="p"
                    className="text-[24px] font-normal text-gray-500 line-through lg:text-[20px]"
                  >
                    $399
                  </Text>
                  <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800 lg:text-[20px]">
                    $199
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
