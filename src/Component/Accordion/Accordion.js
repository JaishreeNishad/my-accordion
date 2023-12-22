import React, { useState } from "react";
import AccordionLayout from "../AccordionLayout/AccordionLayout";

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState([false, false, false]);
  const toggle = (index) => {
    if (index === 0) {
      setActiveIndex([!activeIndex[0], activeIndex[1], activeIndex[2]]);
    } else {
      if (index === 1 || index === 2) {
        setActiveIndex([activeIndex[0], !activeIndex[1], activeIndex[2]]);
      }

      if (index === 2) {
        setActiveIndex([activeIndex[0], activeIndex[1], !activeIndex[2]]);
      }
    }
  };
  return (
    <div className="bg-black block h-[600px] ">
      <div className="bg-red-400 w-1/2 p-10 ">
        <AccordionLayout
          title="Accordion 1"
          index={0}
          activeIndex={activeIndex[0]}
          setActiveIndex={() => toggle(0)}
          toggle={() => toggle(0)}
        >
          The accordion component allows the user to show and hide
          <br /> sections of related content on a page.
        </AccordionLayout>

        <AccordionLayout
          title="Accordion 2"
          index={1}
          activeIndex={activeIndex[1]}
          setActiveIndex={() => toggle(1)}
          toggle={() => toggle(1)}
        >
          The accordion component allows the user to show and hide
          <br /> sections of related content on a page.
        </AccordionLayout>

        <AccordionLayout
          title="Accordion 3"
          index={2}
          activeIndex={activeIndex[2]}
          setActiveIndex={() => toggle(2)}
          toggle={() => toggle(2)}
        >
          The accordion component allows the user to show and hide
          <br /> sections of related content on a page.
        </AccordionLayout>
      </div>
    </div>
  );
};

export default Accordion;
