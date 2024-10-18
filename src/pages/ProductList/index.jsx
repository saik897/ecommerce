import { Helmet } from "react-helmet";
import { Img, Button, Text, CheckBox, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductDetails1 from "../../components/ProductDetails1";
import UserRating from "../../components/UserRating";
import React, { Suspense } from "react";

const productCatalogGrid = [
  {
    productImage: "images/img_placeholder_3.png",
    productName: (
      <>
        Green <br />
        Warm Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_placeholder_2.png",
    productName: (
      <>
        Black
        <br />
        Warm Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_shoes_isolated_pk7npbk.png",
    productName: (
      <>
        Blue Grey <br />
        Warm Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_placeholder_4.png",
    productName: (
      <>
        Blue Denim <br />
        Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_placeholder_244x244.png",
    productName: (
      <>
        Purple <br />
        Warm Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_placeholder_1.png",
    productName: (
      <>
        Casual <br />
        Pink Shirt
      </>
    ),
    productPrice: "$299",
  },
  { productImage: "images/img_placeholder_23.png", productName: "Gray T-shirt", productPrice: "$299" },
  { productImage: "images/img_placeholder_250x250.png", productName: "Red Flannel", productPrice: "$299" },
  {
    productImage: "images/img_placeholder_630x384.png",
    productName: (
      <>
        Casual <br />
        Grey Shoes
      </>
    ),
    productPrice: "$299",
  },
  { productImage: "images/img_sport_j9bzxuy.png", productName: "Pink Jacket", productPrice: "$299" },
  {
    productImage: "images/img_placeholder_5.png",
    productName: (
      <>
        Black <br />
        Warm Jacket
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_placeholder_24.png",
    productName: (
      <>
        Black
        <br />
        Brief Case
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_business_shirt_ptnj9lv.png",
    productName: (
      <>
        Modern Classic
        <br />
        Watch
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_placeholder_176x176.png",
    productName: (
      <>
        Blue Denim <br />
        Skirt
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_placeholder_25.png",
    productName: (
      <>
        Casual <br />
        Classic Watch
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_placeholder_26.png",
    productName: (
      <>
        Black Adventure
        <br />
        Boots
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_placeholder_6.png",
    productName: (
      <>
        Black Formal
        <br />
        Highheels
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_travel_8v7cnke.png",
    productName: (
      <>
        Brown <br />
        Casual Shoes
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_warm_pants_pxl7hrp.png",
    productName: (
      <>
        Gray <br />
        Longpants
      </>
    ),
    productPrice: "$299",
  },
  {
    productImage: "images/img_placeholder_27.png",
    productName: (
      <>
        Green
        <br />
        Sport Jacket
      </>
    ),
    productPrice: "$299",
  },
];

export default function ProductListPage() {
  return (
    <>
      <Helmet>
        <title>Discover Fashionable Products - Elliye&#39;s Product List</title>
        <meta
          name="description"
          content="Browse our product list featuring jackets, shirts, pants, and shoes. View more and find your perfect style with Elliye's diverse collections."
        />
      </Helmet>

      {/* product list page section */}
      <div className="flex w-full flex-col items-center bg-white-a700">
        {/* navigation bar section */}
        <div className="flex flex-col items-center gap-[30px] self-stretch">
          <Header className="self-stretch" />

          {/* breadcrumb section */}
          <div className="container-xs lg:px-5 md:px-5">
            <div className="flex flex-wrap">
              <Text as="p" className="text-[18px] font-medium text-gray-500 lg:text-[15px]">
                Home
              </Text>
              <Text as="p" className="ml-4 text-[18px] font-medium text-blue_gray-100 lg:text-[15px]">
                &gt;
              </Text>
              <Text as="p" className="ml-4 text-[18px] font-medium text-gray-800 lg:text-[15px]">
                Product List
              </Text>
            </div>
          </div>
        </div>

        {/* main content section */}
        <div className="container-xs mt-[38px] flex flex-col items-center gap-[62px] lg:px-5 md:px-5 sm:gap-[31px]">
          <Heading as="h1" className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]">
            Product List
          </Heading>

          {/* category filter section */}
          <div className="flex items-start gap-8 self-stretch md:flex-col">
            {/* price filter section */}
            <div className="flex w-[14%] flex-col gap-8 md:w-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col items-start gap-7">
                    <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                      Categories
                    </Text>
                    <div className="h-px w-full self-stretch bg-blue_gray-100" />
                  </div>
                  <div className="flex flex-col gap-[22px]">
                    <div className="flex items-center gap-4">
                      <Img src="images/img_sweater_gray_500.svg" alt="Sweater Image" className="h-[32px] w-[32px]" />
                      <Text as="p" className="self-start text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Jacket
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_tshirt.svg" alt="Tshirt Image" className="h-[32px] w-[32px]" />
                      <Text as="p" className="self-start text-[18px] font-normal text-gray-800 lg:text-[15px]">
                        Shirt
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_pants_gray_500.svg" alt="Pants Image" className="h-[32px] w-[32px]" />
                      <Text as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Pants
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_boot_gray_500.svg" alt="Boot Image" className="h-[32px] w-[32px]" />
                      <Text as="p" className="self-start text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Shoes
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_dress_gray_500.svg" alt="Dress Image" className="h-[32px] w-[32px]" />
                      <Text as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Dress
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_belt_gray_500.svg" alt="Belt Image" className="h-[32px] w-[32px]" />
                      <Text as="p" className="self-start text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Accesories
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_skirt_gray_500.svg" alt="Skirt Image" className="h-[32px] w-[32px]" />
                      <Text as="p" className="self-start text-[18px] font-normal text-gray-500 lg:text-[15px]">
                        Skirt
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img
                        src="images/img_arrow_down_gray_500.svg"
                        alt="Arrow Down Image"
                        className="h-[24px] w-[24px]"
                      />
                      <a href="#" className="lg:text-[15px]">
                        <Text as="p" className="text-[18px] font-normal text-gray-500">
                          View more
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-blue_gray-100" />
              </div>
              <div className="flex flex-col items-start gap-7">
                <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                  Filter by Price
                </Text>
                <div className="flex flex-col items-start gap-6 self-stretch">
                  <CheckBox
                    name="All Price Checkbox"
                    label="All Price"
                    id="AllPriceCheckbox"
                    className="gap-4 text-[18px] text-gray-500"
                  />
                  <CheckBox
                    name="Mid Price Checkbox"
                    label="$100 - $250"
                    id="MidPriceCheckbox"
                    className="gap-4 text-[18px] text-gray-800"
                  />
                  <CheckBox
                    name="High Price Checkbox"
                    label="$250 - $500"
                    id="HighPriceCheckbox"
                    className="gap-4 text-[18px] text-gray-500"
                  />
                  <CheckBox
                    name="Premium Price Checkbox"
                    label="$750 - $1.000"
                    id="PremiumPriceCheckbox"
                    className="gap-4 text-[18px] text-gray-500"
                  />
                  <CheckBox
                    name="Luxury Price Checkbox"
                    label="$1000 - $1.500"
                    id="LuxuryPriceCheckbox"
                    className="gap-4 text-[18px] text-gray-500"
                  />
                </div>
              </div>
              <div className="h-px bg-blue_gray-100" />

              {/* rating filter section */}
              <div className="flex flex-col items-start gap-7">
                <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                  Filter by Rating
                </Text>
                <div className="flex flex-col gap-4 self-stretch">
                  <div className="flex gap-4">
                    <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100" />
                    <Img src="images/img_star_1_3.svg" alt="One Star Image" className="h-[24px] w-[24px]" />
                  </div>
                  <div className="flex">
                    <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100" />
                    <div className="flex flex-1 gap-2 px-4">
                      <Img src="images/img_star_1_4.svg" alt="Two Stars Image" className="h-[24px] w-[24px]" />
                      <Img src="images/img_star_2_2.svg" alt="Two Half Stars Image" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100" />
                    <div className="flex flex-1 gap-2 px-4">
                      <Img src="images/img_star_1_5.svg" alt="Three Stars Image" className="h-[24px] w-[24px]" />
                      <Img src="images/img_star_2_3.svg" alt="Three Half Stars Image" className="h-[24px] w-[24px]" />
                      <Img
                        src="images/img_star_3_1.svg"
                        alt="Three Quarter Stars Image"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                  <div className="mr-[52px] flex flex-col gap-4 md:mr-0 md:flex-row sm:flex-col">
                    <UserRating className="mr-8 md:mr-0" />
                    <UserRating />
                  </div>
                </div>
              </div>
            </div>

            {/* product display section */}
            <div className="flex flex-1 flex-col gap-7 self-center md:self-stretch">
              <div className="flex justify-center sm:flex-col">
                <Text as="p" className="text-[18px] font-medium text-gray-500 lg:text-[15px]">
                  <span className="text-gray-500">Viewing&nbsp;</span>
                  <span className="text-gray-800">20</span>
                  <span className="text-gray-500">&nbsp;of&nbsp;</span>
                  <span className="text-gray-800">160 product</span>
                </Text>
                <div className="flex flex-1 items-center justify-end gap-4 sm:self-stretch">
                  <Text as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px]">
                    <span className="text-gray-500">Sort by:&nbsp;</span>
                    <span className="text-gray-800">Newest Items</span>
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="Sort Arrow" className="h-[24px] w-[24px]" />
                </div>
              </div>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <div className="flex flex-col items-center gap-[54px] sm:gap-[27px]">
                  <div className="grid grid-cols-5 justify-center gap-8 self-stretch lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {productCatalogGrid.map((d, index) => (
                        <ProductDetails1 {...d} key={"productListGrid" + index} />
                      ))}
                    </Suspense>
                  </div>
                  <div className="flex w-[22%] items-center justify-between gap-5 lg:w-full md:w-full">
                    <Img src="images/img_arrow_left.svg" alt="Arrow Left Image" className="h-[24px] w-[24px]" />
                    <Button size="md" shape="square" className="min-w-[50px] px-[22px] sm:px-4">
                      1
                    </Button>
                    <Button
                      color="gray_500"
                      size="md"
                      variant="outline"
                      shape="square"
                      className="min-w-[50px] !border-2 px-[18px]"
                    >
                      2
                    </Button>
                    <Button
                      color="gray_500"
                      size="md"
                      variant="outline"
                      shape="square"
                      className="min-w-[50px] !border-2 px-[18px]"
                    >
                      3
                    </Button>
                    <Img src="images/img_arrow_right.svg" alt="Arrow Right Image" className="h-[24px] w-[24px]" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer className="mt-[100px] self-stretch" />
      </div>
    </>
  );
}
