import React from "react";
import LeftLayout from "./LeftColumn";
import RightLayout from "./RightLayout";

const MainLayout = () => {
  return (
    <div className="w3-content w3-margin-top" style={{ width: "1400px" }}>
      <div className="w3-row-padding">
        <LeftLayout></LeftLayout>
        <RightLayout></RightLayout>
      </div>
    </div>
  );
};
export default MainLayout;
