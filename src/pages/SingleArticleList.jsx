import Header from "../components/Header";
import FullArticleCard from "../components/FullArticleCard";
import { getArticle } from "../utils/api";

const SingleArticleList = () => {
  return (
    <section>
      <Header title="Article" />
      <FullArticleCard/>
    </section>
  );
};

export default SingleArticleList;