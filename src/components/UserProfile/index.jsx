import { Text, Img } from "./..";
import React from "react";

export default function UserProfile({ userImage = "images/img_rectangle_28.png", userDescription, ...props }) {
  return (
    <div {...props} className={`${props.className} h-[400px] w-[48%] md:w-full relative`}>
      <Img src={userImage} alt="Collection Image" className="mx-auto h-[400px] w-full flex-1 object-cover" />
      <Text
        size="textlg"
        as="p"
        className="absolute bottom-0 left-[10%] top-0 my-auto h-max w-[28%] text-[36px] font-normal leading-[54px] text-white-a700 sm:w-[28%] sm:text-[30px]"
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
  );
}
