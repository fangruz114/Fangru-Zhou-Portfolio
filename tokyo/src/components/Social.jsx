import React from "react";
import resume from '../assets/Resume.pdf';

const SocialShare = [
  { iconName: "linkedin", link: "https://www.linkedin.com/in/fangru-zhou-6937934a/" },
  {
    iconName: "github",
    link: "https://github.com/fangruz114",
  },
  { iconName: "resume", link: resume },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
