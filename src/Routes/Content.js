import React from "react";
import { Route, Routes } from "react-router-dom";
import { Analytics } from "../components/Charts/Analytics";

export const Content = () => {
  return (
    <div style={{ width: "100%" }}>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/dashboard" element={<Analytics />}></Route>
      </Routes>
    </div>
  );
};
