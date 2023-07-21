import { getArticle } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const FullArticleCard = ({}) => {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, []);
  

  return (
    <>
      <article>
        <Header title={article.title} />
        <h2>Written by {article.author}</h2>

        <img
          className="articleImg"
          src={article.article_img_url}
          alt={`${article.title}`}
        />
        <h3>{article.body}</h3>
        <div>{article.votes} upvotes  </div>
      </article>
    </>
  );
};

export default FullArticleCard;
