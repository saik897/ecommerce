import React from "react";

const sizes = {
  textxs: "text-[14px] font-normal not-italic",
  textmd: "text-[36px] font-normal lg:text-[30px] md:text-[34px] sm:text-[32px]",
  texts: "text-[18px] font-normal lg:text-[15px]",
  textlg: "text-[36px] font-normal not-italic lg:text-[30px] md:text-[34px] sm:text-[32px]",
  textxl: "text-[96px] font-normal not-italic lg:text-[96px] md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-500 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
