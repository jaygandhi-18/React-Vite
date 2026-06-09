import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div>
      <div className="card postCard" style={{ width: "30rem" }}>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => {
            deletePost(post.id);
          }}>
          <MdDeleteForever />
        </span>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary post-tag">
              {tag}
            </span>
          ))}
          <div className="alert alert-info reactions" role="alert">
            This Post Get Total {post.reaction} Reactions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
