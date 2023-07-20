import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAllArticles } from "../utils/api";
import ArticleCard from "../components/ArticleCard";
import { Link } from "react-router-dom";

const ArticleList= () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      console.log(articlesFromApi)
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <section className="articles">
      <Header title="Articles" />
      <ol className="article_list">
        {articles.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
              <ArticleCard article_id={article.article_id} title={article.title} article_img_url={article.article_img_url} />
            </Link>
          );
        })}
      </ol>
    </section>
  );
};

export default ArticleList
