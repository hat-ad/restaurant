import React from "react";
import Lottie from "react-lottie";
import { buttonLoaderOptions } from "../../common/config";

const index = ({ height, width }) => (
  <Lottie
    options={buttonLoaderOptions}
    height={height}
    width={width}
    style={{ color: "white" }}
  />
);

export default index;
