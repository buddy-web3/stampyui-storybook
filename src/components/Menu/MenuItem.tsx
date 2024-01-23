import React from "react";
import "./menuItem.css";

interface MenuItemProps {
  /**
   * Link url
   */
  link: string;
  /**
   * Provide icon src to display heading img
   */
  icon?: string;
  /**
   * Link text
   */
  text: string;
  /**
   * Is this the primary class of Menu link?
   */
  primary?: boolean;
}
export const MenuItem = ({
  primary = false,
  link,
  icon,
  text,
}: MenuItemProps) => {
  return (
    <li className="menu-item">
      <a href={link} className="menu-link">
        {icon ? (
          <img loading="lazy" src={icon} className="menu-icon" alt={text} />
        ) : null}
        <span className={["menu-text", primary ? "" : "secondary"].join(" ")}>
          {text}
        </span>
      </a>
    </li>
  );
};
