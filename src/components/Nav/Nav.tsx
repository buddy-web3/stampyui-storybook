import React, { useEffect, useRef } from "react";
import "./nav.css";
import { MenuItem } from "../Menu/MenuItem";
import { OpenBookIcon } from "../../assets/OpenBook.tsx";
import { ChatBoxIcon } from "../../assets/ChatBox.tsx";
import { AISafetyIcon } from "../../assets/AISafety.tsx";
import { MagnifyingIcon } from "../../assets/Magnifying.tsx";
import { ArticlesDropdown } from "../ArticlesDropdown/Dropdown";

const IntroductorySections = {
  "Introduction to AI Safety": "/introduction-to-ai-safety",
  "Frequent questions guide": "/frequent-questions-guide",
  "Get involved with AI Safety": "/get-involved-with-ai-safety",
};
const AdvancedSections = {
  Governance: "/governance",
  "Predictions on advanced AI": "/predictions-on-advanced-ai",
  "Technical alignment research categories":
    "/technical-alignment-research-categories",
  "Existential risk concepts": "/existential-risk-concepts",
  "Prominent research organizations": "/prominent-research-organizations",
};
const BrowseByCategory = {
  Definitions: "/definitions",
  Objections: "/objections",
  Superintelligence: "/superintelligence",
  Contributing: "/contributing",
  "Existential risk": "/existential-risk",
  Catastrophe: "/catastrophe",
  "Research agendas": "/research-agendas",
  Governance: "/governance",
  Resources: "/resources",
  Capabilities: "/capabilities",
  "Machine learning": "/machine-learning",
  AGI: "/agi",
};
const BrowseAllCategories = "/browse-all-categories";

export interface NavBarProps {
  /**
   * Introductory sections
   */
  IntroductorySections: Record<string, string>;
  /**
   * Advanced sections
   */
  AdvancedSections: Record<string, string>;
  /**
   * Browse by category
   */
  BrowseByCategory: Record<string, string>;
  /**
   * Browse all categories
   */
  BrowseAllCategories: string;
}
export const NavBar = ({
  IntroductorySections,
  AdvancedSections,
  BrowseByCategory,
  BrowseAllCategories,
}: NavBarProps) => {
  const [isSticky, setSticky] = React.useState(false);
  const MouseEnter = () => {
    setSticky(true);
  };
  const MouseLeave = () => {
    setSticky(false);
  };

  return (
    <header className="top-header">
      <nav className="top-nav">
        <AISafetyIcon classname={"top-logo"} />
        <ul className="top-menu">
          <MenuItem
            primary={true}
            link="#"
            icon={<OpenBookIcon classname={"top-menu-icon"} />}
            text="Articles"
            onMouseEnter={MouseEnter}
          />
          <ArticlesDropdown
            isSticky={isSticky}
            MouseEnter={MouseEnter}
            MouseLeave={MouseLeave}
            IntroductorySections={IntroductorySections}
            AdvancedSections={AdvancedSections}
            BrowseByCategory={BrowseByCategory}
            BrowseAllCategories={BrowseAllCategories}
          />
          <MenuItem
            primary={true}
            link="#"
            icon={<ChatBoxIcon classname={"top-menu-icon"} />}
            text="Stampy chatbot"
          />
          <li className="top-menu-item">
            <div className="top-menu-divider"></div>
          </li>
        </ul>

        <div style={{ flexGrow: 12 }}></div>
        <div className={"search-box"}>
          <div className={"search-inputChild"} />
          <div className={"search-content"}>
            <MagnifyingIcon classnamme={"iconsMagnifyingGlass"} />
            <input
              placeholder={"Search articles"}
              className={"search-input"}
            ></input>
          </div>
        </div>
      </nav>
    </header>
  );
};
