import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, DashboardOutlined } from "@ant-design/icons";

export const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Menu
        style={{ height: "100vh" }}
        theme="dark"
        onClick={({ key }) => {
          navigate(key);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Home", key: "/", icon: <HomeOutlined /> },
          {
            label: "Dashboard",
            key: "/dashboard",
            icon: <DashboardOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};
