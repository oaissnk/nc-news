const ArticleCard = ({ article_id, title, article_img_url }) => {
  return <div className="header">{title}
  <img src={article_img_url} alt="" />
  </div>;
};

export default ArticleCard;
