import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  const FeaturedArticles = articles.filter(art => art.IsFeatured === "Yes");
  const OtherArticles = articles.filter(art => art.IsFeatured !== "Yes");
  return (
    <div>
      <div className="uk-child-width-2 uk-grid-small" data-uk-grid="true">
        <div>
          <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
            {FeaturedArticles.map((article, index) => {
              if(index % 2 == 0){
                return (
                  <Card
                    article={article}
                    isRighty={false}
                    key={`article__left__${article.slug}`}
                  />
                );
              }
              else {
                return (
                  <Card
                    article={article}
                    isRighty={true}
                    key={`article__left__${article.slug}`}
                  />
                );
              }
            })}
          </div>
        </div>
        <div>
          <div className="cardGrid" data-uk-grid>
            {OtherArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__left__${article.slug}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;