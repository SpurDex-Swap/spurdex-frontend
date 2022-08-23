import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <circle cx="14" cy="14" r="14" fill="#FFE200"/>
      <path d="M11.8113 23H15.283V14.4261H17.6981L17.9245 11.5435H15.283C15.283 11.5435 15.283 10.4348 15.283 9.91739C15.283 9.25217 15.434 8.95652 16.1132 8.95652C16.6415 8.95652 18 8.95652 18 8.95652V6C18 6 16.0377 6 15.5849 6C13.0189 6 11.8113 7.1087 11.8113 9.25217C11.8113 11.1 11.8113 11.5435 11.8113 11.5435H10V14.4261H11.8113V23Z" fill="#0E0E0E"/>
    </Svg>
  );
};

export default Icon;
