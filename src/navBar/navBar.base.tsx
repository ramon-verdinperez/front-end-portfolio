import { NavLink } from "react-router-dom";
import { Text } from "@fluentui/react";
import "./navBar.css";

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
      link: "/cardDetails"
    },
    {
      text: "IP Address Tracker",
      link: "/ipAddressTracker"
    }
  ];

  return (
    <div className="navBarOuter">
      <div className="navBarLinks">
        {links.map((l: LinkType) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLinkText linkText" : "linkText"
              }
              to={l.link}
              key={l.text}
            >
              <Text variant="large">{l.text}</Text>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
