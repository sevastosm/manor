import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AnimationDiv from "./animation/AnimationDiv";

export default function Layout({ children, data, ...props }) {
  const { smallFooter, headerBlack, layoutBlack } = props;
  const [osClass, setOsClass] = useState("");

  let layoutClass = layoutBlack ? "inner inner-black" : "inner";

  useEffect(() => {
    if (typeof navigator != "undefined" && navigator !== null) {
      if (navigator.platform.indexOf("Win") >= 0) {
        setOsClass("inner--win");
      } else {
        setOsClass("inner--os");
      }
    }
  }, []);

  return (
    <div className={`${layoutClass} ${osClass}`}>
      <div className="wrapper">
        <Header data={data} headerBlack={headerBlack} />

        <AnimationDiv scenario="y">
          <main>{children}</main>
        </AnimationDiv>
      </div>
      <Footer data={data} smallFooter={smallFooter} />
    </div>
  );
}
