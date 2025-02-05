import { CloseSVG } from "../Input/close.jsx";
import { Button, Img, Input } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex justify-center items-center py-6 sm:py-4 bg-white-a700`}>
      <div className="container-xs flex justify-center lg:px-5 md:px-5">
        <div className="flex w-full items-center justify-between gap-5 md:flex-col">
          <Img
            src="images/img_header_logo.png"
            alt="Header Logo"
            className="h-[36px] w-[112px] self-end object-contain md:self-auto"
          />
          <Input
            color="white_A700"
            size="xs"
            variant="fill"
            shape="square"
            name="Search Field"
            placeholder={`Search here`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            suffix={
              <div className="flex h-[48px] w-[48px] items-center justify-center bg-gray-800">
                {searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} height={18} width={18} />
                ) : (
                  <Img src="images/img_search_white_a700_18x18.svg" alt="Search" className="h-[18px] w-[18px] p-3.5" />
                )}
              </div>
            }
            className="w-[36%] gap-[34px] border-2 border-solid border-gray-50 text-gray-500_7f md:w-full"
          />
          <div className="flex w-[12%] items-center justify-between gap-5 md:w-full">
            <div className="flex w-[36%] justify-between gap-5">
              <a href="#">
                <Img src="images/img_cart.svg" alt="Cart Icon" className="h-[24px] w-[24px]" />
              </a>
              <a href="#">
                <Img src="images/img_email_gray_800.svg" alt="Email Icon" className="h-[24px] w-[24px]" />
              </a>
            </div>
            <Button size="xs" shape="square" className="min-w-[106px] px-[34px] font-bold sm:px-4">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
