import { motion } from "framer-motion";
import { useState } from "react";

const scenarios = {
  height: {
    visible: {
      height: "100%",
    },
    hidden: {
      height: 0,
    },
  },
  width: {
    visible: {
      width: 0,
    },
    hidden: {
      width: "100%",
    },
  },
  y: {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 0,
    },
  },
};

const AnimationDiv = ({
  children,
  delay,
  duration,
  className,
  scenario,
  once = true,
}) => {
  const [isInView, setIsInView] = useState(false);

  const visible = scenarios[scenario].visible;
  const hidden = scenarios[scenario].hidden;

  return (
    <motion.div
      className={className}
      transition={{
        delay: delay ? delay : 0.25,
        duration: duration ? duration : 0.5,
      }}
      viewport={{ once: true }}
      // variants={scenarios[scenario]}
      initial={isInView && once ? visible : hidden}
      whileInView={visible}
      onViewportEnter={() => setIsInView(true)}
    >
      {children}
    </motion.div>
  );
};

export default AnimationDiv;
