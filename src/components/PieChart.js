import React from "react";
import { Chart } from "react-google-charts";

const PieChart = ({ data }) => {
  return (
    <Chart chartType="Bar" data={data} width={"100%"} height={"400px"} />
  );
};

export default PieChart;
