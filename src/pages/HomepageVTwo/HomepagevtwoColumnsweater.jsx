import { Text, Img, Button, Heading, Slider } from "../../components";
import React from "react";

export default function HomepagevtwoColumnsweater() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="mx-auto w-full overflow-auto">
      <div className="mx-auto flex w-full">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="relative h-[750px] content-center lg:h-auto md:h-auto">
                <Img src="images/img_image_1.png" alt="Promo Image" className="h-[750px] w-[92%] object-contain" />
                <div className="absolute bottom-0 left-0 top-0 my-auto mr-[134px] flex h-max flex-1 justify-center bg-black-900_68 py-[116px] lg:mr-0 lg:py-8 md:mr-0 md:py-5 sm:py-4">
                  <div className="container-xs mb-[74px] flex justify-center lg:px-5 md:px-5">
                    <div className="flex w-full flex-col items-start gap-20 lg:gap-20 md:gap-[60px] sm:gap-10">
                      <div className="flex flex-col items-start gap-2 self-stretch">
                        <Text size="textmd" as="p" className="text-[24px] font-medium text-white-a700 lg:text-[20px]">
                          50% Off Limited Offer
                        </Text>
                        <Heading
                          size="heading3xl"
                          as="h1"
                          className="font-playfairdisplay text-[128px] font-bold leading-[100%] text-white-a700 lg:text-[48px] md:text-[48px]"
                        >
                          <>
                            Summer <br />
                            Collection
                          </>
                        </Heading>
                      </div>
                      <Button
                        size="3xl"
                        shape="square"
                        rightIcon={<Img src="images/img_arrow.svg" alt="Arrow" className="h-[48px] w-[48px]" />}
                        className="min-w-[244px] gap-2.5 px-8 font-medium sm:px-4"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[4%] left-[41%] m-auto flex w-[58%] overflow-x-scroll shadow-lg">
                  <div className="flex w-[1216px] gap-4 md:flex-col">
                    <div className="flex w-[12%] flex-col items-center gap-3.5 bg-white-a700 p-[30px] md:w-full md:px-5 sm:py-4">
                      <Img src="images/img_sweater.svg" alt="Jacket Image" className="h-[56px] w-[56px]" />
                      <Text as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Jacket
                      </Text>
                    </div>
                    <div className="flex w-[12%] flex-col items-center gap-3.5 bg-white-a700 p-[30px] md:w-full md:px-5 sm:py-4">
                      <Img src="images/img_tshirt.svg" alt="Shirt Image" className="h-[56px] w-[56px]" />
                      <Text as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Shirt
                      </Text>
                    </div>
                    <div className="flex w-[12%] flex-col items-center justify-center gap-4 bg-white-a700 p-7 md:w-full md:px-5 sm:py-4">
                      <Img src="images/img_pants.svg" alt="Pants" className="h-[56px] w-[56px]" />
                      <Text as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Pants
                      </Text>
                    </div>
                    <div className="flex w-[12%] flex-col items-center gap-3.5 bg-gray-800 p-[30px] md:w-full md:px-5 sm:py-4">
                      <Img src="images/img_boot.svg" alt="Boot" className="h-[56px] w-[56px]" />
                      <Text as="p" className="text-[18px] font-normal text-white-a700 lg:text-[15px]">
                        Shoes
                      </Text>
                    </div>
                    <div className="flex w-[12%] flex-col items-center justify-center gap-4 bg-white-a700 p-7 md:w-full md:px-5 sm:py-4">
                      <Img src="images/img_dress.svg" alt="Dress" className="h-[56px] w-[56px]" />
                      <Text as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Dress
                      </Text>
                    </div>
                    <div className="flex w-[12%] flex-col items-center gap-3.5 bg-white-a700 p-[30px] md:w-full md:px-5 sm:py-4">
                      <Img src="images/img_belt.svg" alt="Belt" className="h-[56px] w-[56px]" />
                      <Text as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Accesories
                      </Text>
                    </div>
                    <div className="flex h-[160px] w-[12%] flex-col items-center justify-center bg-[url(/public/images/img_skirt.svg)] bg-cover bg-no-repeat p-[30px] lg:h-auto md:h-auto md:w-full md:px-5 sm:py-4">
                      <div className="flex w-[56%] flex-col items-center gap-4 lg:w-full md:w-full">
                        <Img
                          src="images/img_skirt_gray_800.svg"
                          alt="Skirt"
                          className="h-[56px] w-full lg:h-auto md:h-auto"
                        />
                        <Text as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                          Skirt
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
    </div>
  );
}
