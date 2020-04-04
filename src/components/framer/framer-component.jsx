import React from "react";
import { motion } from "framer-motion";

const Spinner = () => {
  const variants = {
    spinning: {
      rotate: 360,
      transition: {
        loop: Infinity,
        ease: "linear",
        duration: 1.3,
      },
    },
  };

  return (
    <>
      <motion.div
        className="w-12 h-12 border-solid border-indigo-600 border-8 rounded-full"
        style={{
          borderTopColor: "hotpink",
        }}
        variants={variants}
        animate="spinning"
      />
    </>
  );
};

const Properties = () => {
  const [state, setState] = React.useState(false);

  const transition = {
    type: "spring",
    damping: 12,
    stiffness: 100,
  };

  const variants = {
    inactive: {
      x: 0,
      scale: 1,
      borderRadius: 10,
    },
    active: {
      x: 200,
      scale: 1.2,
      borderRadius: 100,
    },
  };

  return (
    <>
      <motion.div
        className="w-32 h-32 bg-indigo-500 flex items-center justify-center text-white"
        variants={variants}
        transition={transition}
        onClick={() => setState((state) => !state)}
        animate={state ? "active" : "inactive"}
      >
        click-me
      </motion.div>
    </>
  );
};

const List = (props) => {
  const [state, setState] = React.useState(false);
  const classItem =
    "bg-gray-100 mb-2 px-3 py-4 rounded-md shadow-xl text-gray-800";

  const variants = {
    initial: (custom) => ({
      y: -20,
      scale: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.05,
      },
    }),
    visible: (custom) => ({
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-md font-semibold font-display text-gray-900 ">Top 10 filmes</h3>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setState((state) => !state)}
        >
          {state ? "show" : "hide "}
        </button>
      </div>
      <motion.ul className="">
        {props.data.map((item, idx) => (
          <motion.li
            className={classItem}
            custom={idx}
            initial="initial"
            variants={variants}
            animate={state ? "initial" : "visible"}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Object.assign("", {
  Spinner,
  Properties,
  List,
});
