import Link from "next/link";
import React from "react";
import { imagePath } from "../config";

export default function Footer({ data, smallFooter }) {
  const [studio, setStudio] = useState(data?.studio);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData");
      let { studio } = await makeQuery(studioQuery);
      setStudio(studio);
    };
    fetchData();
  }, []);

  let dateF = new Date();
  dateF.setDate(dateF.getDate() + 7);
  let dateYear = dateF.getUTCFullYear();

  if (smallFooter) {
    return (
      <footer className="footer footer-small">
        <div className="content">
          <div className="footer__inline">
            <div className="footer__info">
              <div className="footer__copyright">
                (C) {dateYear} manor. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer__inline">
          <div className="footer__info">
            <div className="footer__logo">Manor</div>
            <div className="footer__address">
              <div>{studio?.adress}</div>
            </div>

            <div className="footer__copyright">
              (C) {dateYear} manor. All rights reserved
            </div>
          </div>

          <div className="footer__aside">
            <div className="footer__contacts">
              <div className="footer__title">For all enquires email</div>
              <Link href="mailto:jack@manor.studio" className="footer__email">
                {studio?.email}
              </Link>
            </div>

            <div className="social">
              <Link
                href={`mailto:${studio?.email}`}
                target="_blank"
                className="social__item"
              >
                <img
                  src={imagePath + "/img/layout/general/email.png"}
                  alt="email"
                />
              </Link>
              <Link
                href={`https://www.instagram.com/${studio?.instagram.slice(1)}`}
                target="_blank"
                className="social__item"
              >
                <img
                  src={imagePath + "/img/layout/general/Instagram.png"}
                  alt="instagram"
                />
              </Link>
              <Link
                href={studio?.vimeo}
                target="_blank"
                className="social__item"
              >
                <img
                  src={imagePath + "/img/layout/general/vimeo.png"}
                  alt="video"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
