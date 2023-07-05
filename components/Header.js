import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AnimationText from "./animation/AnimationText";

export default function Header({ data, headerBlack }) {
  const router = useRouter();

  if (router.pathname === "/contact") {
    headerBlack = true;
  }

  const headerClass = headerBlack ? "header header-black" : "header";

  const [isOpen, setIsOpen] = useState(false);

  const menus = data.menus;
  const studio = data.studio;

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [isOpen]);

  return (
    <header className={headerClass}>
      <div className="content">
        <div className="header__inline">
          <Link href="/" className="logo">
            <img
              src={
                headerBlack
                  ? "/img/layout/general/logo-white.png"
                  : "/img/layout/general/logo.png"
              }
              alt="image"
            />
          </Link>
          <div className="header__open" onClick={open}>
            {headerBlack ? (
              <img src="/img/layout/general/nav-open-white.svg" alt="image" />
            ) : (
              <img src="/img/layout/general/nav-open.svg" alt="image" />
            )}
          </div>

          <div className={`header__nav ${isOpen ? "active" : ""}`}>
            <div className="header__close" onClick={close}>
              <img src="/img/layout/general/close.png" alt="image" />
            </div>
            <ul className="header__list">
              {menus?.map((menu, index) => {
                let activeClass =
                  menu?.url === router.pathname.slice(1) ||
                  (!menu?.url && router.pathname === "/")
                    ? "active"
                    : "";

                return (
                  <li key={menu.id} className="header__item">
                    <AnimationText
                      delay={index * 0.1}
                      duration={0.5}
                      once={true}
                    >
                      <Link
                        className={activeClass}
                        href={"/" + (menu?.url || "")}
                      >
                        {menu.name}
                      </Link>
                    </AnimationText>
                  </li>
                );
              })}
            </ul>

            <div className="header__wrap">
              <div className="header__info">
                <Link href="#" className="header__logo">
                  Manor
                </Link>
                <div className="header__address">
                  <div>89 borough high street London se1 1nl</div>
                </div>

                <div className="header__copyright">
                  (C) 2022 manor. All rights reserved
                </div>
              </div>

              <div className="header__aside">
                <div className="header__contacts">
                  <div className="header__title">For all enquires email</div>
                  <Link
                    href="mailto:jack@manor.studio"
                    className="footer__email"
                  >
                    jack@manor.studio
                  </Link>
                </div>
                {headerBlack ? (
                  <div className="social">
                    <Link
                      href={`mailto:${studio?.email}`}
                      target="_blank"
                      className="social__item"
                    >
                      <img src="/img/layout/general/email.png" alt="email" />
                    </Link>
                    <Link
                      href={`https://www.instagram.com/${studio?.instagram.slice(
                        1
                      )}`}
                      target="_blank"
                      className="social__item"
                    >
                      <img
                        src="/img/layout/general/Instagram.png"
                        alt="instagram"
                      />
                    </Link>
                    <Link
                      href={studio?.vimeo}
                      target="_blank"
                      className="social__item"
                    >
                      <img src="/img/layout/general/v-white.png" alt="image" />
                    </Link>
                  </div>
                ) : (
                  <div className="social">
                    <Link
                      href={`mailto:${studio?.email}`}
                      target="_blank"
                      className="social__item"
                    >
                      <img src="/img/layout/general/email.png" alt="email" />
                    </Link>
                    <Link
                      href={`https://www.instagram.com/${studio?.instagram.slice(
                        1
                      )}`}
                      target="_blank"
                      className="social__item"
                    >
                      <img
                        src="/img/layout/general/Instagram.png"
                        alt="instagram"
                      />
                    </Link>
                    <Link
                      href={studio?.vimeo}
                      target="_blank"
                      className="social__item"
                    >
                      <img src="/img/layout/general/vimeo.png" alt="video" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {headerBlack ? (
            <div className="social">
              <Link
                href={`https://www.instagram.com/${studio?.instagram.slice(1)}`}
                target="_blank"
                className="social__item"
              >
                <img src="/img/layout/general/Instagram.png" alt="image" />
              </Link>
              <Link
                href={studio?.vimeo}
                target="_blank"
                className="social__item"
              >
                <img src="/img/layout/general/v-white.png" alt="image" />
              </Link>
            </div>
          ) : (
            <div className="social">
              <Link
                href={`https://www.instagram.com/${studio?.instagram.slice(1)}`}
                target="_blank"
                className="social__item"
              >
                <img src="/img/layout/general/instagram.svg" alt="image" />
              </Link>
              <Link
                href={studio?.vimeo}
                target="_blank"
                className="social__item"
              >
                <img src="/img/layout/general/vimeo-black.png" alt="image" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
