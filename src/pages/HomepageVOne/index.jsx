import { Helmet } from "react-helmet";
import { Text, Img, Heading, Input, Slider, Button } from "../../components";
import CategoriesSection from "./CategoriesSection";
import FeaturedSection from "./FeaturedSection";
import HeroSection from "./HeroSection";
import NewArrivalsSection from "./NewArrivalsSection";
import PopularThisWeekSection from "./PopularThisWeekSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import React from "react";

export default function HomepageVOnePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Summer Sale - Exclusive Discounts on Fashion Collections</title>
        <meta
          name="description"
          content="Explore our Summer Sale with up to 50% off on the latest fashion. Shop jackets, dresses, accessories, and more. Don't miss out on our new arrivals and featured collections."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        {/* header section */}
        <header className="flex items-center justify-center bg-white-a700 py-4">
          <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:flex-col md:px-5">
            <Img src="images/img_header_logo.png" alt="Header Logo" className="h-[36px] w-[112px] object-contain" />
            <ul className="flex flex-wrap gap-20 lg:gap-5 md:gap-5">
              <li>
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                  <Text as="p" className="text-[18px] font-medium text-gray-800">
                    Categories
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="lg:text-[15px]">
                  <Text as="p" className="text-[18px] font-medium text-gray-800">
                    New Arrival
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="lg:text-[15px]">
                  <Text as="p" className="text-[18px] font-medium text-gray-800">
                    Features
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="lg:text-[15px]">
                  <Text as="p" className="text-[18px] font-medium text-gray-800">
                    Collections
                  </Text>
                </a>
              </li>
            </ul>
            <div className="flex w-[14%] items-center justify-between gap-5 md:w-full">
              <div className="flex w-[32%] justify-between gap-5">
                <a href="#">
                  <Img src="images/img_search.svg" alt="Search Icon" className="h-[24px] w-[24px]" />
                </a>
                <a href="#">
                  <Img src="images/img_cart.svg" alt="Cart Icon" className="h-[24px] w-[24px]" />
                </a>
              </div>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button shape="square" className="min-w-[106px] px-7 font-bold sm:px-4">
                  Login
                </Button>
              </a>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center">
          {/* hero section */}
          <HeroSection />

          {/* categories section */}
          <CategoriesSection />

          {/* new arrivals section */}
          <NewArrivalsSection />

          {/* featured section */}
          <FeaturedSection />

          {/* summer collection section */}
          <div className="relative mt-[74px] h-[544px] self-stretch">
            <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 justify-center bg-gray-800 py-[42px] md:py-5 sm:py-4">
              <div className="container-xs mb-[284px] flex lg:px-5 md:px-5">
                <Heading
                  as="h2"
                  className="text-[36px] font-bold text-white-a700 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                >
                  Summer Collections
                </Heading>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 m-auto flex w-full items-center justify-center md:relative md:flex-col">
              <div className="container-xs mx-auto flex w-full gap-8 lg:px-5 md:mx-0 md:flex-col md:px-5">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 2 }, 1441: { items: 3 } }}
                  disableDotsControls
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="px-4">
                        <div className="relative h-[400px] content-center bg-blue_gray-100 lg:h-auto md:h-auto">
                          <Img
                            src="images/img_image_2.png"
                            alt="Image One"
                            className="mx-auto h-[400px] w-full flex-1 object-cover"
                          />
                          <Text
                            size="textlg"
                            as="p"
                            className="absolute bottom-0 left-[11%] top-0 my-auto h-max w-[36%] text-[36px] font-normal leading-[54px] text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                          >
                            <span>
                              <>
                                Summer <br />
                              </>
                            </span>
                            <span className="font-bold">Collection</span>
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
              <div className="flex flex-col items-center bg-white-a700 p-2.5 md:px-5">
                <Img src="images/img_arrow_gray_800.svg" alt="Arrow Image" className="h-[38px]" />
              </div>
            </div>
          </div>

          {/* popular this week section */}
          <PopularThisWeekSection />

          {/* why choose us section */}
          <WhyChooseUsSection />

          {/* brands section */}
          <div className="container-xs mt-[100px] flex flex-col items-center px-14 lg:px-5 md:px-5">
            <div className="flex w-[64%] items-center justify-center lg:w-full md:w-full md:flex-col">
              <div className="flex flex-1 items-start justify-between gap-5 md:self-stretch sm:flex-col">
                <Img
                  src="images/img_bajuu.svg"
                  alt="Bajuu Image"
                  className="h-[68px] w-[24%] self-center object-contain sm:w-full"
                />
                <Img
                  src="images/img_kathoc.svg"
                  alt="Kathoc Image"
                  className="h-[50px] w-[28%] object-contain sm:w-full"
                />
                <Img
                  src="images/img_pernik.svg"
                  alt="Pernik Image"
                  className="mr-20 h-[48px] w-[24%] object-contain sm:mr-0 sm:w-full"
                />
              </div>
              <Img src="images/img_spatu.svg" alt="Spatu Image" className="h-[62px] w-[16%] object-contain md:w-full" />
            </div>
          </div>
        </div>

        {/* footer section */}
        <footer className="mt-[100px] flex items-end justify-center bg-gray-800 py-[30px] sm:py-4">
          <div className="container-xs mt-[30px] flex justify-center lg:px-5 md:px-5">
            <div className="flex w-[94%] flex-col items-center gap-[82px] lg:w-full lg:gap-[82px] md:w-full md:gap-[61px] sm:gap-[41px]">
              <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                <div className="flex w-[28%] flex-col items-start gap-[30px] md:w-full">
                  <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
                    Join our Newsletter
                  </Heading>
                  <Text as="p" className="text-[18px] font-normal leading-[27px] text-white-a700 lg:text-[15px]">
                    <>
                      Drop your email below to get update about us, <br />
                      lastest news, tips, and more!
                    </>
                  </Text>
                  <Input
                    color="white_A700"
                    size="md"
                    variant="fill"
                    shape="square"
                    type="email"
                    name="Email Input"
                    placeholder={`Enter your email`}
                    suffix={<Img src="images/img_arrow_gray_800.svg" alt="Arrow" className="h-[30px] w-[32px]" />}
                    className="w-[90%] gap-[34px] tracking-[0.36px] text-gray-500_7f"
                  />
                </div>
                <div className="flex w-[46%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
                  <div className="flex w-[40%] flex-col items-start gap-5 md:w-full">
                    <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
                      Product Links
                    </Heading>
                    <ul className="flex flex-col items-start gap-2">
                      <li>
                        <a href="#" className="lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            Categories
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            New Arrival
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            Features
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            Collections
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex w-[38%] flex-col items-start gap-5 self-center md:w-full">
                    <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
                      Company
                    </Heading>
                    <ul className="flex flex-col items-start">
                      <li>
                        <a href="#" className="lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            About
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mt-3 lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            Blog
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mt-1.5 lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            Careers
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mt-2.5 lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            Contact{" "}
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mt-2 lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            Services
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
                      Support
                    </Heading>
                    <ul className="flex flex-col items-start gap-2">
                      <li>
                        <a href="#" className="lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            Support Center
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            FAQ
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            Privacy Policy
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="lg:text-[15px]">
                          <Text as="p" className="text-[18px] font-normal text-white-a700">
                            Terms of service
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-[10%] flex-col items-start gap-6 md:w-full">
                  <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
                    Get In Touch
                  </Heading>
                  <div className="flex w-[78%] justify-between gap-5 lg:w-full md:w-full">
                    <Img src="images/img_instagram.svg" alt="Instagram Icon" className="h-[24px] w-[24px]" />
                    <Img src="images/img_trash.svg" alt="Trash Icon" className="h-[24px] w-[24px]" />
                    <Img src="images/img_facebook.svg" alt="Facebook Icon" className="h-[24px] w-[24px]" />
                  </div>
                </div>
              </div>
              <Text as="p" className="text-[14px] font-normal text-white-a700">
                Copyright © 2021 Elliye. All Right Reseved
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
