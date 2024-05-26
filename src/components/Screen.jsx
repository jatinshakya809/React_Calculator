import React from "react";

const Screen = ({ value }) => {
  return (
    <div className="w-[90%] justify-center items-center">
      <input
        type="text"
        readOnly
        value={value}
        className="outline-none text-right border-gray-500 w-full  m-4 border rounded-lg px-4 py-4"
      />
    </div>
  );
};

export default Screen;
