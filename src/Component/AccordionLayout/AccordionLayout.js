import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const AccordionLayout = ({
  title,
  children,
  activeIndex,
  setActiveIndex,
  index,
  toggle,
}) => {
  // const handleSetIndex = (index) => {
  //   activeIndex !== index && setActiveIndex(index);
  // };

  return (
    <>
      <div
        onClick={toggle}
        className="flex w-1/2 justify-between mt-2 p-2 rounded bg-white"
      >
        <div className="flex mt-2">
          <div className="text-black font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex ? (
            <FaArrowDown
              className="w-8 h-8 text-black cursor-pointer"
              onClick={toggle}
            />
          ) : (
            <FaArrowUp
              className="w-8 h-8 text-black cursor-pointer"
              onClick={toggle}
            />
          )}
        </div>
      </div>

      {activeIndex && (
        <div className="w-1/2 justify-between p-2 mt-2 text-black font-bold rounded bg-green-500 p-4 ">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
