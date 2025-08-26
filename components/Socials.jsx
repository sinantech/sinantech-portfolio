import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoDribbble,
  BiLogoLinkedin,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/",
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: "https://www.instagram.com/",
  },
  {
    icon: <BiLogoDribbble />,
    path: "https://dribbble.com/",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
