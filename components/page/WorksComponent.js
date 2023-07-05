import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";

import AnimationDiv from "../animation/AnimationDiv";
import AnimationText from "../animation/AnimationText";
// import AnimationImageBorder from "../animation/AnimationImageBorder";
import { motion } from "framer-motion";

const WorksItem = ({ project, index }) => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const video = useRef(null);

  const handleCursor = (e) => {
    setLeft(e.offsetX + 20);
    setTop(e.offsetY + 20);
  };

  return (
    <div
      className="works__item"
      key={project.id}
      style={{ position: "relative", zIndex: isShow ? 9 : 1 }}
    >
      <div
        onMouseEnter={() => {
          // setIsShow(true);
          // document.addEventListener("mousemove", handleCursor);
          if (video && video.current) video.current.play();
        }}
        onMouseLeave={() => {
          // setIsShow(false);
          // document.removeEventListener("mousemove", handleCursor);
          if (video && video.current) video.current.pause();
        }}
      >
        <Link href={`/project/${project.id}`} className="works__img">
          {/* <AnimationImageBorder delay={index % 2}> */}
          {/* <Image src={project.image.url} width={600} height={600} /> */}
          {/* </AnimationImageBorder> */}

          <AnimationText delay={index % 2}>
            <Image src={project.image.url} width={600} height={600} alt="" />
          </AnimationText>

          <div
            className="works__gif"
            style={{
              position: "absolute",
              top,
              left,
            }}
          >
            {project.gifMainPage ? (
              <video ref={video} width="400" height="300" loop autoPlay muted playsInline>
                <source
                  src={project.gifMainPage.url}
                  type={project.gifMainPage.mimeType}
                />
              </video>
            ) : null}
          </div>
        </Link>
      </div>

      {/* <div
        className="works__gif"
        style={{
          position: "absolute",
          display: isShow ? "block" : "none",
          top,
          left,
        }}
      >
        {project.gifMainPage ? (
          <video ref={video} width="400" height="300" loop muted>
            <source
              src={project.gifMainPage.url}
              type={project.gifMainPage.mimeType}
            />
          </video>
        ) : null}
      </div> */}

      <h2 className="works__name">
        <AnimationText delay={(index % 2) / 4}>
          <Link href={`/project/${project.id}`}>{project.projectName}</Link>
        </AnimationText>
      </h2>
      <AnimationText delay={(index % 2) / 2}>
        <p className="works__desc">{project.shortDescription}</p>
      </AnimationText>
    </div>
  );
};

export default function WorksComponent({ studio, projects }) {
  return (
    <section className="works">
      <div className="content">
        <h1 className="works__title">
          <AnimationDiv
            className="works__title__border"
            duration={0.3}
            scenario="height"
          />
          {studio?.shortDescription}

          {/* <AnimationText initial={{ y: 0 }}>
            {studio.shortDescription}
          </AnimationText> */}
        </h1>

        <div className="works__list">
          {projects.map((project, index) => {
            return (
              <WorksItem key={project.id} project={project} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
