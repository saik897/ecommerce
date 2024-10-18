import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import FeaturedCollection from "./FeaturedCollection";
import HeroBanner from "./HeroBanner";
import NewArrivals from "./NewArrivals";
import PopularThisWeek from "./PopularThisWeek";
import ValueProposition from "./ValueProposition";
import React from "react";

export default function HomepageVThreePage() {
  return (
    <>
      <Helmet>
        <title>New Arrivals - Latest Fashion Trends and Collections</title>
        <meta
          name="description"
          content="Stay ahead of the fashion curve with our New Arrivals. Check out the latest jackets, shoes, dresses, and accessories. Enjoy free delivery and exceptional customer support."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-a700">
        <div className="self-stretch">
          {/* main navigation section */}
          <header className="relative z-[1] flex items-end justify-center bg-white-a700">
            <div className="container-xs mt-[30px] flex justify-center lg:px-5 md:px-5">
              <div className="flex w-full flex-col gap-7">
                <div className="flex items-start justify-between gap-5 md:flex-col">
                  <ul className="flex flex-wrap gap-14 lg:gap-5 md:gap-5">
                    <li>
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <Text as="p" className="text-[18px] font-normal text-gray-800">
                          Categories
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="lg:text-[15px]">
                        <Text as="p" className="text-[18px] font-normal text-gray-800">
                          New Arrival
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="lg:text-[15px]">
                        <Text as="p" className="text-[18px] font-normal text-gray-800">
                          Features
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="lg:text-[15px]">
                        <Text as="p" className="text-[18px] font-normal text-gray-800">
                          Collections
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <div className="flex w-[52%] items-start justify-between gap-5 self-center md:w-full">
                    <Img
                      src="images/img_header_logo.png"
                      alt="Header Logo"
                      className="h-[36px] w-[112px] self-center object-contain"
                    />
                    <div className="flex w-[18%] justify-between gap-5">
                      <a href="#">
                        <Img src="images/img_search.svg" alt="Search Icon" className="h-[24px] w-[24px]" />
                      </a>
                      <a href="#">
                        <Img src="images/img_cart.svg" alt="Cart Icon" className="h-[24px] w-[24px]" />
                      </a>
                      <a href="#">
                        <Img src="images/img_email_gray_800.svg" alt="Email Icon" className="h-[24px] w-[24px]" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-50" />
              </div>
            </div>
          </header>

          {/* featured products section */}
          <div className="flex justify-center bg-white-a700">
            <div className="container-xs flex justify-center gap-6 px-14 lg:px-5 md:flex-col md:px-5">
              <div className="flex w-[8%] flex-col items-center justify-center gap-1.5 bg-white-a700 p-4 md:w-full">
                <Img src="images/img_sweater_blue_gray_100.svg" alt="Sweater Image" className="h-[48px] w-[48px]" />
                <Text as="p" className="text-[18px] font-normal text-blue_gray-100 lg:text-[15px]">
                  Jacket
                </Text>
              </div>
              <div className="flex w-[8%] flex-col items-center justify-center gap-1.5 bg-white-a700 p-4 md:w-full">
                <Img src="images/img_tshirt_blue_gray_100.svg" alt="Tshirt Image" className="h-[48px] w-[48px]" />
                <Text as="p" className="text-[18px] font-normal text-blue_gray-100 lg:text-[15px]">
                  Shirt
                </Text>
              </div>
              <div className="flex w-[8%] flex-col items-center justify-center gap-2 bg-white-a700 p-4 md:w-full">
                <Img src="images/img_pants_blue_gray_100.svg" alt="Pants Image" className="h-[48px] w-[48px]" />
                <Text as="p" className="text-[18px] font-normal text-blue_gray-100 lg:text-[15px]">
                  Pants
                </Text>
              </div>
              <div className="flex w-[8%] flex-col items-center justify-center gap-1.5 bg-white-a700 p-4 md:w-full">
                <Img src="images/img_boot_gray_800.svg" alt="Boot Image" className="h-[48px] w-[48px]" />
                <Text as="p" className="text-[18px] font-normal text-gray-800 lg:text-[15px]">
                  Shoes
                </Text>
              </div>
              <div className="flex w-[8%] flex-col items-center justify-center gap-2 bg-white-a700 p-4 md:w-full">
                <Img src="images/img_dress_blue_gray_100.svg" alt="Dress Image" className="h-[48px] w-[48px]" />
                <Text as="p" className="text-[18px] font-normal text-blue_gray-100 lg:text-[15px]">
                  Dress
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 bg-white-a700 px-2.5 py-4">
                <Img src="images/img_belt_blue_gray_100.svg" alt="Belt Image" className="h-[48px] w-[48px]" />
                <Text as="p" className="text-[18px] font-normal text-blue_gray-100 lg:text-[15px]">
                  Accesories
                </Text>
              </div>
              <div className="flex w-[8%] flex-col items-center justify-center gap-1.5 bg-white-a700 p-4 md:w-full">
                <Img src="images/img_skirt_blue_gray_100.svg" alt="Skirt Image" className="h-[48px] w-[48px]" />
                <Text as="p" className="text-[18px] font-normal text-blue_gray-100 lg:text-[15px]">
                  Skirt
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 bg-white-a700 px-2.5 py-4">
                <Img src="images/img_bra.svg" alt="Bra Image" className="h-[48px] w-[48px]" />
                <Text as="p" className="text-[18px] font-normal text-blue_gray-100 lg:text-[15px]">
                  Underwear
                </Text>
              </div>
              <div className="flex w-[8%] flex-col items-center justify-center gap-2 bg-white-a700 p-4 md:w-full">
                <Img src="images/img_dot.svg" alt="Dot Image" className="h-[48px] w-[48px]" />
                <Text as="p" className="text-[18px] font-normal text-blue_gray-100 lg:text-[15px]">
                  More
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* hero banner section */}
        <HeroBanner />

        {/* featured collection section */}
        <FeaturedCollection />

        {/* new arrivals section */}
        <NewArrivals />

        {/* exclusive collections section */}
        <div className="container-xs mt-[100px] lg:px-5 md:px-5">
          <div className="flex gap-8 md:flex-col">
            <UserProfile />
            <UserProfile userImage="images/img_rectangle_29.png" />
          </div>
        </div>

        {/* value proposition section */}
        <ValueProposition />

        {/* popular this week section */}
        <PopularThisWeek />

        {/* brand showcase section */}
        <div className="container-xs mt-[98px] flex flex-col items-center px-14 lg:px-5 md:px-5">
          <div className="flex w-[64%] items-center justify-center lg:w-full md:w-full md:flex-col">
            <div className="flex flex-1 items-start justify-between gap-5 md:self-stretch sm:flex-col">
              <Img
                src="images/img_bajuu.svg"
                alt="Baju Image"
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

        {/* footer section */}
        <footer className="mt-[100px] flex items-end justify-center self-stretch bg-gray-800 py-[30px] sm:py-4">
          <div className="container-xs mt-[30px] flex justify-center lg:px-5 md:px-5">
            <div className="flex w-full items-start md:flex-col">
              <div className="flex w-[24%] flex-col items-start md:w-full">
                <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
                  Contacts
                </Heading>
                <div className="mt-8 flex flex-col justify-center gap-[18px] self-stretch">
                  <div className="flex items-center gap-2">
                    <Img src="images/img_call.svg" alt="Phone Icon" className="h-[24px] w-[24px]" />
                    <Text size="texts" as="p" className="text-[18px] font-normal text-white-a700 lg:text-[15px]">
                      +1234567890
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <Img src="images/img_email_white_a700.svg" alt="Email Icon" className="h-[24px] w-[24px]" />
                    <Text size="texts" as="p" className="text-[18px] font-normal text-white-a700 lg:text-[15px]">
                      elliye@support.com
                    </Text>
                  </div>
                </div>
                <Heading
                  size="headings"
                  as="h4"
                  className="mt-[46px] text-[24px] font-bold text-white-a700 lg:text-[20px]"
                >
                  Social Media
                </Heading>
                <div className="mt-8 flex w-[28%] justify-between gap-5 lg:w-full md:w-full">
                  <Img src="images/img_instagram.svg" alt="Instagram Icon" className="h-[24px] w-[24px]" />
                  <Img src="images/img_trash.svg" alt="Trash Icon" className="h-[24px] w-[24px]" />
                  <Img src="images/img_facebook.svg" alt="Facebook Icon" className="h-[24px] w-[24px]" />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start gap-16 self-center md:self-stretch sm:gap-8">
                <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                  <div className="flex w-[46%] items-center justify-between gap-5 self-center md:w-full sm:flex-col">
                    <div className="flex w-[74%] flex-col items-start gap-7 sm:w-full">
                      <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
                        Product Links
                      </Heading>
                      <ul className="flex flex-col items-start gap-3.5">
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              Categories
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              New Arrival
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              Features
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              Collections
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              Discount
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              Special Offer
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start gap-7">
                      <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
                        Company
                      </Heading>
                      <ul className="flex flex-col items-start gap-3.5">
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              About
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              Blog
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              Careers
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              Services
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              Privacy Policy
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="lg:text-[15px]">
                            <Text as="p" className="text-[18px] font-normal text-gray-500">
                              Terms of service
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex w-[32%] flex-col items-start gap-6 md:w-full">
                    <Heading size="headings" as="h4" className="text-[24px] font-bold text-white-a700 lg:text-[20px]">
                      Join our Newsletter
                    </Heading>
                    <div className="flex flex-col gap-[34px] self-stretch">
                      <Text as="p" className="text-[18px] font-normal leading-[27px] text-gray-500 lg:text-[15px]">
                        Drop your email below to get update, promotions, coupons, and more!
                      </Text>
                      <div className="flex items-center justify-between gap-5 border border-solid border-white-a700 bg-gray-800">
                        <Text
                          size="texts"
                          as="p"
                          className="ml-6 text-[18px] font-normal tracking-[0.36px] text-blue_gray-100_7f lg:text-[15px]"
                        >
                          Enter your email
                        </Text>
                        <Button color="white_A700" size="2xl" shape="square" className="w-[60px] px-3.5">
                          <Img src="images/img_arrow_gray_800.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Text as="p" className="ml-[260px] text-[14px] font-normal text-blue_gray-100 md:ml-0">
                  Copyright © 2021 Elliye. All Right Reseved
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
