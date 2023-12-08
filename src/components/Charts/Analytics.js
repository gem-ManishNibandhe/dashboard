import React, { useEffect, useState } from "react";
import { AvgErrorRate } from "./AvgErrorRate";
import { Button, Flex, Select } from "antd";
import data from "../../Data/mock_data.json";
import "../Charts/Charts.css";
import { InputOutputChar } from "./InputOutputChar";
import { LangToken } from "./LangToken";

export const Analytics = () => {
  // Extract unique languages from the evaluations
  const [filteredEvaluations, setfilteredEvaluations] = useState();

  let uniqueLanguages = Array.from(
    new Set(
      data.map((evaluation) => ({
        value: evaluation.language,
        label: evaluation.language,
      }))
    )
  );
  const uniqueLanguagesSet = new Set(uniqueLanguages.map(JSON.stringify));
  const uniqueLanguage = Array.from(uniqueLanguagesSet, JSON.parse);
  console.log(uniqueLanguage);
  const handleChange = (value) => {
    const filteredEvaluations = data.filter((evaluation) =>
      value.includes(evaluation.language)
    );
    if (filteredEvaluations.length != 0) {
      setfilteredEvaluations(filteredEvaluations);
    } else {
      setfilteredEvaluations(data);
    }
  };
  useEffect(() => {}, [filteredEvaluations]);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div
        className="dashboard-filter"
        style={{
          height: "10vh",
          backgroundColor: "#ffff92",
          margin: "5px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0px 200px 0px  200px",
        }}
      >
        <div style={{ display: "flex" }}>
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="filter by language"
            onChange={handleChange}
            options={uniqueLanguage}
            style={{ width: "200px" }}
          />
          <div style={{ paddingLeft: "20px" }}>
            <Button type="primary">Submit</Button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", height: "50vh" }}>
        <div
          style={{
            width: "70%",
            backgroundColor: "#f1ff92",
            margin: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputOutputChar value={data} filter={filteredEvaluations} />
        </div>
        <div
          style={{
            width: "40%",
            backgroundColor: "#d1ff92",
            margin: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="ChartContainer2"
        >
          {/* <h1>Error percentage rate (Pie Charts)</h1> */}
          <AvgErrorRate value={data} filter={filteredEvaluations} />
        </div>
      </div>
      <div
        style={{
          height: "40vh",
          backgroundColor: "#ff9f92",
          margin: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <h1>Language Model token</h1> */}
        <LangToken value={data} filter={filteredEvaluations} />
      </div>
    </div>
  );
};
