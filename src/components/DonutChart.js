import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  pieHole: 0.4,
  is3D: false,
};

const DonutChart = ({ data }) => {
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

export default DonutChart;
