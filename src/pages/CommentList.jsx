import Header from "../components/Header";
import CommentCard from "../components/CommentCard";
import { useState, useEffect } from "react";
// import { getComment } from "../utils/api";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const [comment, setComment] = useState([]);
  const params = useParams();

  // useEffect(() => {
  //   getComment(params.articleType).then((commentFromApi) => {
  //     setItems(commentFromApi);
  //   });
  // }, []);

  return (
    <section className="comments">
      <Header title="Comments" />
      {/* <ol className="comments_list">
        {items.map(
          ({
            body,
            comment_id,
          }) => {
            return (
              <CommentCard
                key={comment_id}
                body={body}
              />
            );
          }
        )}
      </ol> */}
    </section>
  );
};

export default CommentList;
