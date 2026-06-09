import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const tagsElement = useRef();
  const reactionsElement = useRef();

  const handleOnSubmit = (event) => {
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const reactions = reactionsElement.current.value;

    userIdElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    tagsElement.current.value = "";
    reactionsElement.current.value = "";

    addPost(userId, title, content, tags, reactions);
  };
  return (
    <>
      <form className="create-post" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Enetr Your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={titleElement}
            className="form-control"
            id="tital"
            placeholder="How Are You Feeling Today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={contentElement}
            rows={4}
            className="form-control"
            id="body"
            placeholder="Tell Us more about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Post Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Enter Tags Here... useing space"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reacions" className="form-label">
            Number Of Reacions
          </label>
          <input
            type="text"
            className="form-control"
            id="reacions"
            ref={reactionsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
