import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";

interface LinkType {
  text: string;
  link: string;
}
const NavBar = () => {

  const base = "/front-end-portfolio";

  const links: Array<LinkType> = [
    {
      text: "Home",
      link: `${base}/`,
    },
    {
      text: "FAQ",
      link: `${base}/faqAccordion`,
    },
    {
      text: "Result Summary",
      link: `${base}/resultSummary`,
    },
    {
      text: "Card Details",
      link: `${base}/cardDetails`,
    },
    {
      text: "IP Address Tracker",
      link: `${base}/ipAddressTracker`,
    },
    {
      text: "Social Feed",
      link: `${base}/socialFeed`,
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
