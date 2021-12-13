import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css"

function Chart(props) {

  const dataPointValuesArr = props.dataPoints.map(dataPoint => dataPoint.value) /* --> transform dataPoint from an object to a number */
  const totalMax = Math.max(...dataPointValuesArr);
  // now it's the data point values arr where we wanna find the maximum. 
  // But since max wants a LIST of arguments instead of an ARRAY. And since this still is an array, data point values still is an array. 
  // We can use the spread operator here to pull out all the array elements and add them as standalone arguments to this max method. So now this max method will receive 12 arguments which are these 12 values from our array pulled out by this spread operator.

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => 
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMax} 
          label={dataPoint.label} 
        />
      )}
    </div>
  );
}

export default Chart;