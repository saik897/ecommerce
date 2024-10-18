import { Text, Img } from "../../components";
import React from "react";

export default function FeaturedCollections() {
  return (
    <>
      {/* featured collections section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[114px] lg:gap-[114px] lg:px-5 md:gap-[85px] md:px-5 sm:gap-[57px]">
          <Img src="images/img_vector.svg" alt="Vector Image" className="ml-[330px] mr-[328px] h-[68px] md:mx-0" />
          <div className="flex gap-8 md:flex-col">
            <div className="flex w-full flex-col gap-8">
              <div className="relative h-[400px] content-center lg:h-auto md:h-auto">
                <Img
                  src="images/img_placeholder_400x800.png"
                  alt="Placeholder Image"
                  className="mx-auto h-[400px] w-full flex-1 object-cover"
                />
                <Text
                  size="textlg"
                  as="p"
                  className="absolute bottom-0 left-[10%] top-0 my-auto h-max w-[28%] text-[36px] font-normal leading-[54px] text-white-a700 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                >
                  <span>
                    <>
                      Casual
                      <br />
                    </>
                  </span>
                  <span className="font-playfairdisplay text-[48px] font-bold">Collection</span>
                </Text>
              </div>
              <div className="relative h-[400px] content-center lg:h-auto md:h-auto">
                <Img
                  src="images/img_placeholder_15.png"
                  alt="Summer Image"
                  className="mx-auto h-[400px] w-full flex-1 object-cover"
                />
                <Text
                  size="textlg"
                  as="p"
                  className="absolute bottom-0 left-[11%] top-0 my-auto h-max w-[28%] text-[36px] font-normal leading-[54px] text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                >
                  <span>
                    <>
                      Summer <br />
                    </>
                  </span>
                  <span className="font-playfairdisplay text-[48px] font-bold">Collection</span>
                </Text>
              </div>
            </div>
            <div className="relative h-[832px] w-full content-center lg:h-auto md:h-auto">
              <Img
                src="images/img_placeholder_832x800.png"
                alt="Vibe Image"
                className="mx-auto h-[832px] w-full flex-1 object-cover"
              />
              <Text
                size="textlg"
                as="p"
                className="absolute left-[10%] top-[37%] m-auto w-[28%] text-[36px] font-normal leading-[54px] text-white-a700 lg:text-[30px] md:text-[30px] sm:text-[28px]"
              >
                <span>
                  <>
                    Big Vibe <br />
                  </>
                </span>
                <span className="font-playfairdisplay text-[48px] font-bold">Collection</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
