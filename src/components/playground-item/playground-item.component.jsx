import React from "react";

const PlaygroundItem = (props) => {
  return (
    <div
      className="bg-gray-200 px-6 py-5 mb-4 rounded-md justify-start w-full"
      style={{ minWidth: 200, minHeight: 200 }}
    >
      <h2 className="text-2xl leading-5 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate mb-2">{props.title}</h2>
      <p className="text-sm leading-5 text-gray-500 mb-2">{props.subtitle}</p>
      <div className="py-4">
        {props.children}
      </div>
    </div>
  );
};

export default PlaygroundItem;
