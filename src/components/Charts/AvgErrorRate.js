import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const AvgErrorRate = (props) => {
  const [data, setdata] = useState();
  function calculateAverageErrorRateByLanguage(evaluations) {
    // console.log(evaluations);
    // Create an object to store total error rates and counts for each language
    const languageErrorRates = {};

    // Iterate through evaluations
    evaluations.forEach((evaluation) => {
      const language = evaluation.language;
      const errorRate = evaluation.error_rate_percentage;

      // Check if the language exists in the object, if not, initialize it
      if (!languageErrorRates[language]) {
        languageErrorRates[language] = {
          totalErrorRate: 0,
          count: 0,
        };
      }

      // Add the error rate to the total and increment the count
      languageErrorRates[language].totalErrorRate += errorRate;
      languageErrorRates[language].count++;
    });

    // Calculate the average error rate for each language
    const averageErrorRateByLanguage = {};
    for (const language in languageErrorRates) {
      const totalErrorRate = languageErrorRates[language].totalErrorRate;
      const count = languageErrorRates[language].count;
      const averageErrorRate = totalErrorRate / count;
      averageErrorRateByLanguage[language] = averageErrorRate;
    }

    return averageErrorRateByLanguage;
  }

  useEffect(() => {}, [props.value, props.filter]);
  // Call the function and log the result
  let averageErrorRates = null;
  if (props.value != null) {
    averageErrorRates = calculateAverageErrorRateByLanguage(props.value);
  }
  if (props.filter != null) {
    console.log(props.filter);
    averageErrorRates = calculateAverageErrorRateByLanguage(props.filter);
  }

  const convertedList = Object.entries(averageErrorRates).map(
    ([language, averageErrorRate]) => ({
      name: language,
      y: averageErrorRate,
    })
  );

  const options = {
    chart: {
      type: "pie",
      height: 350,
    },
    title: {
      text: "Average error rate per by language",
    },
    subtitle: {
      text: [],
      align: "left",
    },
    tooltip: {
      valueSuffix: "%",
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
            format: "{point.percentage:.1f}%",
            style: {
              //   fontSize: "1.2em",
              textOutline: "none",
              opacity: 0.7,
            },
            filter: {
              operator: ">",
              property: "percentage",
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
        name: "Percentage",
        colorByPoint: true,
        data: convertedList,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
