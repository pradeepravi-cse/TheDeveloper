import React from "react";
import * as _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faBehance
} from "@fortawesome/free-brands-svg-icons";

import "./SocialConnect.scss";

const Links = [
  {
    title: "facebook",
    url: "https://www.facebook.com/pradeepkumar0594",
    icon: faFacebookF
  },
  {
    title: "twitter",
    url: "https://twitter.com/Pradeepravi_CSE",
    icon: faTwitter
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/pradeepkumarcse/",
    icon: faLinkedinIn
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/pradeepkumar_ravi/",
    icon: faInstagram
  },
  {
    title: "behance",
    url: "https://www.behance.net/pradeep_designer",
    icon: faBehance
  }
];

export function SocialConnect({ showOnMobile }: { showOnMobile?: boolean }) {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const windowHeight = window.innerHeight;
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.pageYOffset);
    });
  }, []);
  const variationCheck =
    scrollPosition + 300 <= windowHeight && pathname == "/";

  return (
    <div className={showOnMobile ? "SocialConnect--Mobile" : "SocialConnect"}>
      {_.map(Links, Link => {
        return (
          <a
            href={Link.url}
            target="_blank"
            key={Link.title}
            className={
              variationCheck
                ? "SocialConnect__Link"
                : showOnMobile
                ? "SocialConnect--Mobile__Link SocialConnect__Link--colored"
                : "SocialConnect__Link SocialConnect__Link--colored"
            }
          >
            <FontAwesomeIcon icon={Link.icon} />
          </a>
        );
      })}
    </div>
  );

  // <div className="SocialConnect">
  //   <a
  //     href="https://www.facebook.com/pradeepkumar0594"
  //     target="_blank"
  //     className={
  //       variationCheck
  //         ? "SocialConnect__Link"
  //         : "SocialConnect__Link SocialConnect__Link--colored"
  //     }
  //   ></a>
  //   <a
  //     href="https://twitter.com/Pradeepravi_CSE"
  //     target="_blank"
  //     className={
  //       variationCheck
  //         ? "SocialConnect__Link"
  //         : "SocialConnect__Link SocialConnect__Link--colored"
  //     }
  //   >
  //     <FontAwesomeIcon icon={faTwitter} />
  //   </a>
  //   <a
  //     href="https://www.linkedin.com/in/pradeepkumarcse/"
  //     target="_blank"
  //     className={
  //       scrollPosition + 300 <= windowHeight && pathname == "/"
  //         ? "SocialConnect__Link"
  //         : "SocialConnect__Link SocialConnect__Link--colored"
  //     }
  //   >
  //     <FontAwesomeIcon icon={faLinkedinIn} />
  //   </a>
  //   <a
  //     href="https://www.instagram.com/pradeepkumar_ravi/"
  //     target="_blank"
  //     className={
  //       scrollPosition + 300 <= windowHeight
  //         ? "SocialConnect__Link"
  //         : "SocialConnect__Link SocialConnect__Link--colored"
  //     }
  //   >
  //     <FontAwesomeIcon icon={faInstagram} />
  //   </a>
  //   <a
  //     href="https://www.behance.net/pradeep_designer"
  //     target="_blank"
  //     className={
  //       scrollPosition + 300 <= windowHeight && pathname == "/"
  //         ? "SocialConnect__Link"
  //         : "SocialConnect__Link SocialConnect__Link--colored"
  //     }
  //   >
  //     <FontAwesomeIcon icon={faBehance} />
  //   </a>
  // </div>
}
