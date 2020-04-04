import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col p-6">
      <div className="m-auto" style={{ width: "50rem" }}>
        {children}
      </div>
    </div>
  );
};

export default Container;