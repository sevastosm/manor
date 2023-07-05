import React from "react";
// import AnimationDiv from "../animation/AnimationDiv";
import AnimationText from "../animation/AnimationText";

export default function Offer({ studio }) {
  const videoName = studio ? studio.promoVideo.split("/").pop() : null;

  const videoParams = new URLSearchParams({
    h: "890a72647b",
    loop: "1",
    autoplay: "1",
    muted: "1",
    portrait: "0",
    byline: "0",
    controls: "0",
    keyboard: "0",
  });

  return (
    <section className="offer animation-div--relative">
      {/* <AnimationDiv
        scenario={"width"}
        className={"animation-div__mask"}
        duration="1"
        delay="1"
        once={true}
      ></AnimationDiv> */}

      <AnimationText>
        <div className="offer__video">
          <iframe
            src={`https://player.vimeo.com/video/${videoName}?${videoParams.toString()}`}
            width="640"
            height="360"
            frameBorder="0"
            // allow="autoplay; fullscreen; background; loop; muted; controls; picture-in-picture"
            style={{ backgroundColor: "#EDE9E7" }}
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowFullScreen=""
            data-ready="true"
          ></iframe>
        </div>
      </AnimationText>
    </section>
  );
}
