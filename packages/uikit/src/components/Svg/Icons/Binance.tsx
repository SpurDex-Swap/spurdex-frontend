import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 1280 1024"
    >
      <rect
        width="1280"
        height="1024"
        x="-640"
        y="-512"
        fill="#FFF"
        fillOpacity="0"
        strokeWidth="0"
        paintOrder="stroke"
        rx="0"
        ry="0"
        transform="translate(640 512)"
       />
      <g
        paintOrder="stroke"
        transform="matrix(-3.5881 0 0 -3.5881 640.03 512.313) matrix(.27397 0 0 -.27397 0 0)"
      >
        <linearGradient
          id="SVGID_5_5_1_101096"
          x1="0"
          x2="0"
          y1="0"
          y2="967"
          gradientTransform="translate(8033.01 819.715)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#17EAD9" />
          <stop offset="100%" stopColor="#6078EA" />
        </linearGradient>
        <path
          fill="url(#SVGID_5_5_1_101096)"
          d="M8498.12 1786.24l-465.11-584.99 42.5-41.14 276.37 82.82 35.78 82.13-221.64-66.43 301.65 407.61-79.56-662.06-197.69 149.45-83.84-23.61 320.52-310.305 596 422.465zm356.54-468.01l-223.13 68-69.06 234.82zm-344.36 354.63l65.59-291.39-78.16-23.43zm-18.46-387.99l119.84 35.91 328.95-80.93-473.62-263.252 24.83 308.272"
          transform="translate(-8528.055 -1302.977)"
         />
      </g>
    </svg>
  );
};

export default Icon;
