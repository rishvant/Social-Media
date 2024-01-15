import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const reactionsRef = useRef();
  const tagsRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdRef.current.value;
    const postTitle = titleRef.current.value;
    const postContent = contentRef.current.value;
    const postReactions = reactionsRef.current.value;
    const postTags = tagsRef.current.value.split(" ");

    userIdRef.current.value = "";
    titleRef.current.value = "";
    contentRef.current.value = "";
    reactionsRef.current.value = "";
    tagsRef.current.value = "";

    addPost(userId, postTitle, postContent, postReactions, postTags);
  }

    return (
      <form className="form-container" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your User Id here</label>
    <input type="text" ref={userIdRef} className="form-control" id="userId" aria-describedby="emailHelp" placeholder="Your User Id" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={titleRef} className="form-control" id="title" aria-describedby="emailHelp" placeholder="How are you feeling today?" />
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">No. of Reactions</label>
    <input type="number" ref={reactionsRef} className="form-control" id="reactions" aria-describedby="emailHelp" placeholder="How many people reacted to the post" />
  </div>
  <div className="mb-3">
    <label htmlFor="content" className="form-label">Post Content</label>
    <textarea rows="4" ref={contentRef} type="text" className="form-control" id="content" placeholder="Tell us about anything." />
  </div>
  <div className="mb-3">
    <label htmlFor="" className="form-label">Add hashtags</label>
    <input type="text" ref={tagsRef} className="form-control" id="content"/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    )
}

export default CreatePost;