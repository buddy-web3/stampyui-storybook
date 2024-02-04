import React, { FunctionComponent } from "react";
import "./menu.css";
import { act } from "react-dom/test-utils";
interface Article {
  title: string;
  id: number;
  dropdown: Article[];
  isHeader?: boolean;
}
interface ArticlesNavProps {
  /**
   * Articles List
   */
  articles: Article[];
  /**
   * Selected article
   */
  active: 0;
  /**
   * Callback function to handle click on article
   */
  onClick?: () => void;
}

const demoArticles = [
  {
    title: "Introduction to AI safety",
    id: 0,
    dropdown: [],
    isHeader: true,
  },
  {
    title: "Consciousness",
    id: 1,
    dropdown: [
      {
        title: "lorem",
        id: 100,
      },
    ],
  },
  {
    title: "Strategy",
    id: 2,
    dropdown: [
      {
        title: "ipsum",
        id: 200,
      },
    ],
  },
  {
    title: "Current solution attempts",
    id: 3,
    dropdown: [
      {
        title: "dolorem",
        id: 400,
      },
    ],
  },
  {
    title: "Technical misalignment",
    id: 5,
    dropdown: null,
  },
  {
    title: "AGI capabilities",
    id: 6,
    dropdown: [],
  },
  {
    title: "Types of risks",
    id: 7,
    dropdown: null,
  },
  {
    title: "Timelines",
    id: 8,
    dropdown: [
      {
        title: "set",
        id: 800,
      },
    ],
  },
  {
    title: "Takeoff & intelligence explosion",
    id: 9,
  },
  {
    title: "Types of AI",
    id: 10,
  },
  {
    title: "Introduction to machine learning",
    id: 11,
  },
];

export const ArticlesNav = ({
  articles,
  active,
  onclick,
}: ArticlesNavProps) => {
  const [selected, setSelected] = React.useState(active || 0);
  // function to open dropdown on click of article
  const [dropdowns, setDropdowns] = React.useState([]);
  const handleDropdown = (index) => {
    const newDropdowns = [...dropdowns];
    if (newDropdowns.includes(index)) {
      const indexToRemove = newDropdowns.indexOf(index);
      newDropdowns.splice(indexToRemove, 1);
    } else {
      newDropdowns.push(index);
    }
    setDropdowns(newDropdowns);
  };
  const handleClick = (index) => {
    setSelected(index);
    if (onclick) {
      onclick(index);
    }
  };

  return (
    <div className={"articles-group"}>
      {demoArticles.map((article) => {
        if (article.isHeader) {
          return (
            <div
              key={`article-${article.id}`}
              className={[
                "articles-autoLayoutHorizontal",
                selected == article.id
                  ? ["active", "article-hasdot"].join(" ")
                  : "",
              ].join(" ")}
              onClick={() => handleClick(article.id)}
            >
              <div className={["articles-headerLine"]}>{article.title}</div>

              <div className={"articles-line"} />
              {/*<div className={"articles-rectangle"} />*/}
            </div>
          );
        } else {
          return (
            <div
              key={`article-${article.id}`}
              className={[
                "articles-autoLayoutHorizontal",
                selected == article.id ? ["active"].join(" ") : "",
              ].join(" ")}
              onClick={() => handleClick(article.id)}
            >
              <div
                className={[
                  "articles-title",
                  selected == article.id ? ["article-hasdot"].join(" ") : "",
                ].join(" ")}
              >
                {article.title}
                {article?.dropdown && article.dropdown.length !== 0 ? (
                  <div
                    onClick={() => handleDropdown(article.id)}
                    className={[
                      "articles-dropdownIcon",
                      dropdowns.includes(article.id) ? "active" : "",
                    ].join(" ")}
                  />
                ) : null}
              </div>

              <div
                className={[
                  "articles-dropdown",
                  dropdowns.includes(article.id) ? "active" : "",
                ].join(" ")}
              >
                {article.dropdown?.map((dropdownArticle) => {
                  return (
                    <div
                      key={`dropdown-article-${dropdownArticle.id}`}
                      className={"articles-dropdown-item"}
                    >
                      {dropdownArticle.title}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
