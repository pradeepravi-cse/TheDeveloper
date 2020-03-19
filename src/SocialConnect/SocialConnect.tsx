import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faBehance
} from "@fortawesome/free-brands-svg-icons";

import "./SocialConnect.scss";
export function SocialConnect() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const windowHeight = window.innerHeight;
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.pageYOffset);
    });
  }, []);

  return (
    <div className="SocialConnect">
      <a
        href="https://www.facebook.com/pradeepkumar0594"
        target="_blank"
        className={
          scrollPosition + 300 <= windowHeight
            ? "SocialConnect__Link"
            : "SocialConnect__Link SocialConnect__Link--colored"
        }
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://twitter.com/Pradeepravi_CSE"
        target="_blank"
        className={
          scrollPosition + 300 <= windowHeight
            ? "SocialConnect__Link"
            : "SocialConnect__Link SocialConnect__Link--colored"
        }
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://www.linkedin.com/in/pradeepkumarcse/"
        target="_blank"
        className={
          scrollPosition + 300 <= windowHeight
            ? "SocialConnect__Link"
            : "SocialConnect__Link SocialConnect__Link--colored"
        }
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://www.instagram.com/pradeepkumar_ravi/"
        target="_blank"
        className={
          scrollPosition + 300 <= windowHeight
            ? "SocialConnect__Link"
            : "SocialConnect__Link SocialConnect__Link--colored"
        }
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.behance.net/pradeep_designer"
        target="_blank"
        className={
          scrollPosition + 300 <= windowHeight
            ? "SocialConnect__Link"
            : "SocialConnect__Link SocialConnect__Link--colored"
        }
      >
        <FontAwesomeIcon icon={faBehance} />
      </a>
    </div>
  );
}
