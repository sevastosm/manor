import React from "react";
import AnimationText from "../animation/AnimationText";

export default function StudioPage({ studio, clients }) {
  return (
    <section className="studio text">
      <div className="content">
        <div className="text__section">
          <AnimationText delay={0.5}>
            <h1 className="text__title">Studio</h1>
          </AnimationText>

          <AnimationText delay={0.75}>
            <div
              className="text__desc"
              dangerouslySetInnerHTML={{ __html: studio?.description?.html }}
            />
          </AnimationText>
        </div>

        <div className="text__section">
          <AnimationText delay={1}>
            <h2 className="text__title">Clients</h2>
          </AnimationText>

          <AnimationText>
            <div
              className="text__desc"
              dangerouslySetInnerHTML={{ __html: studio?.textClients?.html }}
            />
          </AnimationText>
        </div>

        <AnimationText>
          <div className="clients">
            {clients.map((client, index) => {
              return (
                <div key={client.logo.id} className="clients__item">
                  <img src={client.logo.url} alt="image" />
                </div>
              );
            })}
          </div>
        </AnimationText>
      </div>
    </section>
  );
}
