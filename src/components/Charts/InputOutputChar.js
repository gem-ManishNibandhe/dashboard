import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export const InputOutputChar = (props) => {
  console.log(props);
  const [data, setdata] = useState(props.value);
  function convertToFormat(data) {
    return data.map((evaluation) => {
      const dateOnly = evaluation.timestamp.split("T")[0];
      return [dateOnly, evaluation.speech_output_chars];
    });
  }
  let convertedData;
  if (props.value != null) {
    convertedData = convertToFormat(props.value);
  }
  if (props.filter != null) {
    convertedData = convertToFormat(props.filter);
  }

  const options = {
    chart: {
      type: "column",
      height: 350,
      width: 750,
    },
    title: {
      text: "Speech Input/Output Characters",
    },
    subtitle: {
      text: [],
      align: "left",
    },
    tooltip: {
      valueSuffix: " s",
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [-45, -90],
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Seconds",
      },
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.Seconds:.1f}s",
            style: {
              //   fontSize: "1.2em",
              textOutline: "none",
              opacity: 0.7,
            },
            filter: {
              operator: ">",
              property: "Seconds",
              value: 10,
            },
          },
        ],
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Date",
        colorByPoint: true,
        data: convertedData,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
