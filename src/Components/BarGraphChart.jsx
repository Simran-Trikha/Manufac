import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { Dataset } from "../Datasets/WineSetDataset";
function BarGraphChart() {
  const [option, setOption] = useState({
    title: {
      text: "Bar Graph",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: 10,
      textStyle: {
        fontSize: 16,
      },
      data: ["Alcohol", "Magnesium"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      name: "Alcohol",
      data: [],
    },
    yAxis: {
      name: "Magnesium",
    },
    series: [],
  });

  useEffect(() => {
    setDataSetValues(); //Setting the chart options:
  }, []);

  {
    /* function to get the unique values of Alcohol from the given the dataset. */
  }
  const getUniqueIds = (id) => {
    let uniqueIds = Dataset.reduce((accumulator, current) => {
      if (!accumulator.includes(current[id])) {
        accumulator.push(current[id]);
      }
      return accumulator;
    }, []);
    return uniqueIds;
  };

  const setDataSetValues = () => {
    let newDataSetForYAxis = [];
    let newDataSetForxAxis = [];
    newDataSetForxAxis = getUniqueIds("Alcohol");

    let obj1 = { data: [], type: "bar" };
    let obj2 = { name: "Alcohol", data: [] };

    {
      /* looping through the unique values of Alcohol to get min value of magnesium for a particular alochol value.*/
    }

    for (let i = 0; i < newDataSetForxAxis.length; i++) {
      let arr = [];
      for (let j = 0; j < Dataset.length; j++)
        if (newDataSetForxAxis[i] === Dataset[j].Alcohol) {
          arr.push(Dataset[j].Magnesium);
        }
      // const sortedArr = arr.sort((a, b) => a - b);
      // const min = sortedArr[0];
      let minVal = Math.min(...arr);
      newDataSetForYAxis.push(minVal);
    }

    obj1.data = newDataSetForYAxis;
    obj2.data = newDataSetForxAxis;

    setOption({
      ...option,
      series: obj1,
      xAxis: obj2,
    });
  };

  return (
    <>
      <ReactECharts option={option} className={"class_1"} />
      <br />
    </>
  );
}

export default BarGraphChart;
