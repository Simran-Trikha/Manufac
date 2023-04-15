import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { Dataset } from "../Datasets/WineSetDataset";
echarts.registerTheme("my_theme", {
  backgroundColor: "#f4cccc",
});
echarts.registerTheme("another_theme", {
  backgroundColor: "#eee",
});

function ScatterChart() {
  const [option, setOption] = useState({
    title: {
      text: "Scatter Graph",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: 10,
      right:40,
      top: '3%',
      textStyle: {
        fontSize: 10,
      },
      data: ["Flavanoids", "Ash"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
    },
    xAxis: {
      name: "Flavanoids",
      splitLine: { show: false },
      boundaryGap : false,
    },
    yAxis: {
      name: "Ash",
    splitLine: { show: false },
    },
    series: [],
  });

  useEffect(() => {
    setDataSetValues(); //Setting the chart options: 
  }, []);

  const setDataSetValues = () => {
    let newDataSet = [];
    let obj = {
      data: [],
      type: "scatter",
      areaStyle: { normal: {} },
      dimensions: ['x', 'y'],
    };

    // looping through the dataset array to get the datasets in the required format.

    for (let i = 0; i < Dataset.length; i++) {
      let arr = [Dataset[i].Flavanoids, Dataset[i].Ash];
      newDataSet.push(arr);
    }
    
    obj.data = newDataSet;
    setOption({
      ...option,
      series: obj,
    });
  };

  return (
    <>
      <ReactECharts option={option} />
      <br />
    </>
  );
}

export default ScatterChart;
