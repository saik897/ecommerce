import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function HeroBanner() {
  return (
    <>
      {/* hero banner section */}
      <div className="h-[718px] self-stretch bg-[url(/public/images/img_group_367.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
        <div className="flex justify-center bg-white-a700_82 py-[156px] lg:py-8 md:py-5 sm:py-4">
          <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
            <div className="flex w-[88%] flex-col items-start lg:w-full md:w-full">
              <Button color="white_A700" size="xl" shape="square" className="min-w-[270px] px-2.5 font-medium">
                50% Off Limited Offer
              </Button>
              <div className="mt-[22px] flex flex-col items-start gap-6 self-stretch">
                <Heading
                  size="heading2xl"
                  as="h1"
                  className="font-playfairdisplay text-[72px] font-bold text-gray-800 lg:text-[48px] md:text-[48px]"
                >
                  Summer Collection
                </Heading>
                <Text
                  size="texts"
                  as="p"
                  className="w-[50%] text-[18px] font-normal leading-8 text-gray-800 lg:w-full lg:text-[15px] md:w-full"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.{" "}
                </Text>
              </div>
              <Button
                size="3xl"
                shape="square"
                rightIcon={<Img src="images/img_arrow.svg" alt="Arrow" className="h-[48px] w-[48px]" />}
                className="mt-20 min-w-[244px] gap-2.5 px-8 font-medium sm:px-4"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
