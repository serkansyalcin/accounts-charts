import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  is3D: true,
};

const PieChart3D = ({ data }) => {
  return (
    <Chart
      chartType="PieChart"
      options={options}
      data={data}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default PieChart3D;
