import { Text, Img, Slider, Button, Heading } from "../../components";
import React from "react";

export default function SimilarProductsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* similar products section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[114px] lg:gap-[114px] lg:px-5 md:gap-[85px] md:px-5 sm:gap-[57px]">
          <div className="flex items-center justify-between gap-5 sm:flex-col">
            <div className="flex flex-1 flex-wrap items-center gap-[33px] sm:self-stretch">
              <Heading
                as="h2"
                className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
              >
                Similiar Product
              </Heading>
              <a href="#" className="lg:text-[15px]">
                <Text size="texts" as="p" className="text-[18px] font-medium text-gray-500">
                  View all
                </Text>
              </a>
            </div>
            <div className="flex gap-4">
              <Button
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                size="sm"
                shape="square"
                className="w-[48px] rotate-[-90deg]"
              >
                <Img src="images/img_arrow_blue_gray_100.svg" />
              </Button>
              <Button
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                size="sm"
                shape="square"
                className="w-[48px] rotate-[90deg]"
              >
                <Img src="images/img_arrow_gray_800_48x48.svg" />
              </Button>
            </div>
          </div>
          <div className="mx-auto flex w-full md:mx-0 md:flex-col">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 2 }, 1441: { items: 4 } }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={[...Array(12)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col gap-3.5">
                    <Img
                      src="images/img_placeholder_2.png"
                      alt="Placeholder Image"
                      className="h-[250px] w-[250px] object-cover"
                    />
                    <div className="mx-8 flex flex-col items-start gap-2 md:mx-0">
                      <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800 lg:text-[20px]">
                        Black Briefcase
                      </Text>
                      <Text as="p" className="ml-[68px] text-[18px] font-medium text-gray-500 lg:text-[15px] md:ml-0">
                        $299
                      </Text>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
      </div>
    </>
  );
}
