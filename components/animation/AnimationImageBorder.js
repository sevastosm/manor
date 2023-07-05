import { motion } from "framer-motion";
import { useState } from "react";

const AnimationImageBorder = ({ children, delay, duration, className }) => {
  const [isInView, setIsInView] = useState(false);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      // const delay = 1 + i * 0.5;
      const delay = i;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div>
      <motion.svg
        width="660"
        height="430"
        viewBox="0 0 660 430"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="animation__svg-border"
      >
        <motion.rect
          width="658"
          height="430"
          x="1px"
          y="0"
          rx="0"
          stroke="#000000"
          variants={draw}
          custom={delay}
        />
      </motion.svg>
      <motion.div
        initial={{ opacity: isInView ? 1 : 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onViewportEnter={() => {
          setIsInView(true);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

{
  /* <svg width="660" height="430" viewBox="0 0 660 430" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M658.5 1.5H1.5V428.5H658.5V1.5ZM0 0V430H660V0H0Z" fill="black"/>
</svg> */
}

export default AnimationImageBorder;
