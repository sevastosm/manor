import React from "react";
import Image from "next/image";
// import AnimationDiv from "../animation/AnimationDiv";
import AnimationText from "../animation/AnimationText";

export default function ProjectComponent({ project }) {
  const videoName = project.vimeoUrl.split("/").pop();
  const videoParams = new URLSearchParams({
    h: "890a72647b",
    loop: "1",
    // autoplay: "1",
    // muted: "1",
    portrait: "0",
    byline: "0",
    // controls: "0",
    keyboard: "0",
  });
  let gallery_images = project?.gallery_image;
  return (
    <section className="project">
      <div className="content">
        <div className="project__video animation-div--relative">
          {/* <AnimationDiv
            scenario={"width"}
            className={"animation-div__mask"}
            duration="1"
            delay="1"
            once={true}
          ></AnimationDiv> */}

          <iframe
            src={`https://player.vimeo.com/video/${videoName}?${videoParams.toString()}`}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullcreen="true"
          ></iframe>
        </div>

        <div className="project__main">
          <AnimationText>
            <h1 className="project__title">{project.projectName}</h1>
          </AnimationText>

          <AnimationText>
            <div
              className="project__desc"
              dangerouslySetInnerHTML={{ __html: project.description.html }}
            />
          </AnimationText>

          <AnimationText>
            <div className="gallery">
              {gallery_images?.map((gallery_image, key) => {
                let image = gallery_image.galleryImage;
                let itemClass =
                  gallery_image.typeOfGallery == 1 ? "gallery__big" : "";

                if (image.mimeType.indexOf("video") !== -1) {
                  return (
                    <div
                      key={image.id}
                      className={`gallery__item gallery__video ${itemClass} animation-div--relative`}
                    >
                      <video loop muted autoPlay playsInline>
                        <source src={image.url} type={image.mimeType} />
                      </video>
                    </div>
                  );
                }

                return (
                  <div
                    key={image.id}
                    className={`gallery__item ${itemClass} animation-div--relative`}
                  >
                    {/* <AnimationDivere
                    scenario={"width"}
                    className={"animation-div__mask"}
                    duration="1"
                    delay="0.5"
                  ></AnimationDiv> */}
                    <Image
                      src={image.url}
                      width={1260}
                      height={1260}
                      alt=""
                      // layout="fixed"
                      quality={90}
                    />
                  </div>
                );
              })}
            </div>
          </AnimationText>
        </div>
      </div>
    </section>
  );
}
