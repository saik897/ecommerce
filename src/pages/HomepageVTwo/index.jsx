import { Helmet } from "react-helmet";
import { Text, Button, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close.jsx";
import FeaturedCollections from "./FeaturedCollections";
import FeaturedProducts from "./FeaturedProducts";
import HomepagevtwoColumnsweater from "./HomepagevtwoColumnsweater";
import LimitedOffers from "./LimitedOffers";
import NewArrivalsPopularWeek from "./NewArrivalsPopularWeek";
import ValueProposition from "./ValueProposition";
import React from "react";

export default function HomepageVTwoPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Limited Offer - Hurry Up for 50% Discounts on Trendy Apparel</title>
        <meta
          name="description"
          content="Grab the deal with our 50% Off Limited Offer on selected items. Discover our summer collection, featured products, and new arrivals. Shop now and enjoy exclusive discounts."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        {/* main header section */}
        <header className="flex flex-col items-center justify-center bg-white-a700 py-5">
          <div className="container-xs flex flex-col gap-[18px] lg:px-5 md:px-5">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <Img src="images/img_header_logo.png" alt="Header Logo" className="h-[36px] w-[112px] object-contain" />
              <div className="flex w-[68%] items-center justify-between gap-5 md:w-full md:flex-col">
                <Input
                  color="white_A700"
                  size="xs"
                  variant="fill"
                  shape="square"
                  name="Search Field"
                  placeholder={`Search here`}
                  value={searchBarValue2}
                  onChange={(e) => setSearchBarValue2(e.target.value)}
                  suffix={
                    <div className="flex h-[48px] w-[48px] items-center justify-center bg-gray-800">
                      {searchBarValue2?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue2("")} height={18} width={18} />
                      ) : (
                        <Img src="images/img_search_white_a700.svg" alt="Search" className="h-[18px] w-[18px] p-3.5" />
                      )}
                    </div>
                  }
                  className="w-[52%] gap-[34px] border-2 border-solid border-gray-50 text-gray-500_7f md:w-full"
                />
                <div className="flex w-[20%] items-start justify-between gap-5 md:w-full">
                  <a href="#">
                    <Img src="images/img_cart.svg" alt="Cart Icon" className="mt-3 h-[24px] w-[24px]" />
                  </a>
                  <a href="#">
                    <Img src="images/img_email.svg" alt="Email Icon" className="mt-3 h-[24px] w-[24px]" />
                  </a>
                  <Button size="lg" shape="square" className="min-w-[106px] self-center px-[34px] font-bold sm:px-4">
                    Login
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[22px]">
              <div className="h-px self-stretch bg-gray-50" />
              <ul className="flex flex-wrap gap-20 lg:gap-5 md:gap-5">
                <li>
                  <a href="#" className="lg:text-[15px]">
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
                <li>
                  <a href="#" className="lg:text-[15px]">
                    <Text as="p" className="text-[18px] font-normal text-gray-800">
                      Discount
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[102px] lg:gap-[102px] md:gap-[76px] sm:gap-[51px]">
          {/* hero banner section */}
          <div className="relative h-[750px] content-center lg:h-auto md:h-auto">
            <HomepagevtwoColumnsweater />
            <div className="absolute bottom-[4%] left-[8%] m-auto flex items-center justify-center">
              {[...Array(6)].map((_, i) => (
                <>
                  {sliderState >= i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
                  sliderState < (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1) ? (
                    <div
                      onClick={() => {
                        sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide);
                      }}
                      className="mr-2 inline-block h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-gray-800"
                    />
                  ) : (
                    <div
                      onClick={() => {
                        sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide);
                      }}
                      className="mr-2 inline-block h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-white-a700"
                    />
                  )}
                </>
              ))}
            </div>
          </div>

          {/* featured collections section */}
          <FeaturedCollections />

          {/* featured products section */}
          <FeaturedProducts />

          {/* limited offers section */}
          <LimitedOffers />

          {/* new arrivals popular week section */}
          <NewArrivalsPopularWeek />

          {/* value proposition section */}
          <ValueProposition />
        </div>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}
