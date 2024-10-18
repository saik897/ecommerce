import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};

const variants = {
  fill: {
    white_A700: "bg-white-a700",
  },
  underline: {
    blue_gray_100: "text-gray-800 border-b border-blue_gray-100 border-solid",
  },
  outline: {
    blue_gray_100: "border-blue_gray-100 border border-solid text-gray-800",
  },
};

const sizes = {
  sm: "h-[56px] pr-[34px] text-[18px]",
  md: "h-[60px] pl-6 pr-4 text-[18px]",
  xs: "h-[48px] pl-8 text-[18px]",
  lg: "h-[60px] pl-6 pr-4",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "lg",
      color = "blue_gray_100",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["sm", "md", "xs", "lg"]),
  variant: PropTypes.oneOf(["fill", "underline", "outline"]),
  color: PropTypes.oneOf(["white_A700", "blue_gray_100", "blue_gray_100"]),
};

export { Input };
