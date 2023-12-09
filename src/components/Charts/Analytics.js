import React, { useEffect, useState } from "react";
import { AvgErrorRate } from "./AvgErrorRate";
import { Button, Flex, Select } from "antd";
import data from "../../Data/mock_data.json";
import "../Charts/Styles/Charts.css";
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
    <div className="dashboard-section">
      <div className="dashboard-filter">
        <div style={{ display: "flex" }}>
          <Select
            mode="tags"
            style={{ width: "200px" }}
            placeholder="filter by language"
            onChange={handleChange}
            options={uniqueLanguage}
          />
          <div style={{ paddingLeft: "20px" }}>
            <Button type="primary">Submit</Button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", height: "50vh" }}>
        <div className="io-chart">
          <InputOutputChar value={data} filter={filteredEvaluations} />
        </div>
        <div className="avg-error-chart-section">
          <AvgErrorRate value={data} filter={filteredEvaluations} />
        </div>
      </div>
      <div className="lan-token-chart-section">
        <LangToken value={data} filter={filteredEvaluations} />
      </div>
    </div>
  );
};
