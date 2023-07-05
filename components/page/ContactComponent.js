import React from "react";
import AnimationText from "../animation/AnimationText";

export default function ContactPage({ studio }) {
  return (
    <section className="contacts">
      <div className="content">
        <AnimationText delay={0.5}>
          <h1 className="contacts__title">Contact</h1>
        </AnimationText>

        <div className="contacts__inline">
          <div className="contacts__mail">
            <AnimationText delay={0.75}>
              For all business enquiries please email Jack Hunter at{" "}
              <a href={`mailto:${studio?.email}`}>
                <b>{studio?.email}</b>
              </a>
            </AnimationText>
          </div>

          <div className="contacts__address">
            <AnimationText delay={1}>
              <div>Manor</div>
              <div>{studio?.adress}</div>
            </AnimationText>
          </div>
        </div>
      </div>
    </section>
  );
}
