import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const LangToken = (props) => {
  const [data, setdata] = useState();
  let llmInput = [];
  let llmOutput = [];
  let llmDate = [];

  function transformToFormat(inputData) {
    llmDate = [];
    llmInput = [];
    llmOutput = [];
    inputData.map((item) => {
      llmInput.push(item.llm_tokens_input);
      llmOutput.push(item.llm_tokens_output);
      let dateonly = item.timestamp.split("T")[0];
      llmDate.push(dateonly);
    });
  }
  console.log(props.value);
  let transformedData;
  if (props.value != null) {
    transformedData = transformToFormat(props.value);
  }
  if (props.filter != null) {
    transformedData = transformToFormat(props.filter);
  }

  //   console.log(transformedData);
  const options = {
    chart: {
      type: "line",
      height: 280,
      width: 1300,
    },
    title: {
      text: "Language Token Input vs Language Token Output",
    },
    subtitle: {
      text: [],
      align: "left",
    },
    tooltip: {
      valueSuffix: " s",
    },
    xAxis: {
      categories: llmDate,
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
        name: "LLM Token Input",
        data: llmInput,
        color: "Black",
      },
      {
        name: "LLM Token Output",
        data: llmOutput,
        color: "Brown",
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
