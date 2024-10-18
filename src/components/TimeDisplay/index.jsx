import { Text } from "./..";
import React from "react";

export default function TimeDisplay({ timeValue = "08", timeUnit = "Hours", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[28%] sm:w-full gap-2 p-4 border-gray-500 border border-solid`}
    >
      <Text size="textmd" as="p" className="text-[24px] font-medium text-gray-800">
        {timeValue}
      </Text>
      <Text as="p" className="text-[18px] font-normal text-gray-800">
        {timeUnit}
      </Text>
    </div>
  );
}
