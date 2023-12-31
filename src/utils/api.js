import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-nc-news-kw9s.onrender.com/api",
});

export const getAllArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticle = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}` )
    .then(({ data }) => {
      return data.article;
    });
};
