import React, { useState } from "react";
import AnimationText from "../animation/AnimationText";
import Popup from "../Popup";

export default function CareersPage({ studio, opporrunities }) {
  const [visible, setVisible] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(
    opporrunities[0] ?? null
  );

  const closePopup = () => {
    setVisible(!visible);
  };

  const showOpportunity = (op) => {
    setSelectedOpportunity(op);
    setVisible(true);
  };

  return (
    <section className="careers text">
      <div className="content">
        <AnimationText delay={0.5}>
          <div className="text__section">
            <h1 className="text__title">Careers</h1>

            <AnimationText delay={0.5}>
              <div
                className="text__desc"
                dangerouslySetInnerHTML={{ __html: studio?.textCareers?.html }}
              />
            </AnimationText>
          </div>

          <div className="jobs">
            <h2 className="jobs__title">Open Opportunities</h2>

            <div className="jobs__list">
              {opporrunities.map((op, index) => {
                return (
                  <button
                    key={op.id}
                    className="jobs__item"
                    onClick={() => showOpportunity(op)}
                  >
                    <span>{op.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </AnimationText>
      </div>

      <Popup isVisible={selectedOpportunity.description?.html && visible}>
        <h2>{selectedOpportunity.name}</h2>

        <div
          dangerouslySetInnerHTML={{
            __html: selectedOpportunity.description?.html,
          }}
        />

        <button className="close-modal" onClick={closePopup}>
          Close
        </button>

        <button className="close-modal" onClick={closePopup}>
          Close
        </button>
      </Popup>
    </section>
  );
}
