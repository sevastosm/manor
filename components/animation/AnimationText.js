import { motion } from "framer-motion";
import { useState } from "react";

const AnimationText = ({
  children,
  delay,
  duration,
  initial = {},
  className = "",
  once = true,
}) => {
  const [isInView, setIsInView] = useState(false);
  const visible = { opacity: 1, y: 0 };

  return (
    <div className="animation-text">
      <motion.div
        className={className}
        transition={{
          delay: delay ? delay : 0,
          duration: duration ? duration : 0.3,
        }}
        initial={once && isInView ? visible : { opacity: 0, y: 0, ...initial }}
        whileInView={visible}
        onViewportEnter={() => setIsInView(true)}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationText;
