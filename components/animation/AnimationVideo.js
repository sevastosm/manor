import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const hidden = {
  x: "-100%",
};

const visible = {
  x: 0,
};

const AnimationVideo = ({ children, delay, duration, className }) => {
  const [isInView, setIsInView] = useState(false);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div
      className={
        "animation-text animation-text--" + inView ? "visible" : "hidden"
      }
    >
      <motion.div
        className={className}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          delay: delay ? delay : 0,
          duration: duration ? duration : 0.5,
        }}
        viewport={{ once: true }}
        variants={{
          hidden,
          visible,
        }}
        onViewportEnter={() => {
          setIsInView(true);
        }}
        // animate={control}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationVideo;
