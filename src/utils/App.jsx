import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Homepage from "../pages/Homepage";
import ArticleList from "../pages/ArticleList";
import SingleArticleList from "../pages/SingleArticleList";


function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticleList />} />
      </Routes>
    </main>
  );
}

export default App;
