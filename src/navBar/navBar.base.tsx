import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";

interface LinkType {
  text: string;
  link: string;
}
const NavBar = () => {
  const links: Array<LinkType> = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "FAQ",
      link: "/faqAccordion",
    },
    {
      text: "Result Summary",
      link: "/resultSummary",
    },
    {
      text: "Card Details",
      link: "/cardDetails",
    },
    {
      text: "IP Address Tracker",
      link: "/ipAddressTracker",
    },
    {
      text: "Social Feed",
      link: "/socialFeed",
    },
  ];

  return (
    <div className={style.navBarOuter}>
      <div className={style.navBarLinks}>
          {links.map((l: LinkType) => {
            return (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${style.activeLinkText} ${style.links}`
                      : `${style.links}`
                  }
                  to={l.link}
                  key={l.text}
                >
                  <h3 className={style.linkText}>{l.text}</h3>
                </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default NavBar;
