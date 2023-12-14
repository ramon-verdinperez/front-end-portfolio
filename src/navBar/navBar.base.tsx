import { NavLink } from "react-router-dom";
import { Text } from '@fluentui/react';
import "./navBar.css";

interface LinkType {
  text: string;
  link: string;
}
const NavBar = () => {

  const links: Array<LinkType> = [
    {
      text: "FAQ",
      link: "/faqAccordion",
    },
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
