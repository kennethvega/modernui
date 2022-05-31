import React from "react";
import styles from "./Article.module.scss";
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className={styles["gpt3__blog-container_article"]}>
      <div className={styles["gpt3__blog-container_article-image"]}>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className={styles["gpt3__blog-container_article-content"]}>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
