import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

    return (
        <div className="card card-container" style={{width: "18rem"}}>
  <div className="card-body">
          <h5 className="card-title">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-btn" onClick={() =>deletePost(post.id)}>
              <MdDelete className="delete-icon" />
            <span className="visually-hidden">unread messages</span>
          </span>{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => <span className="badge rounded-pill text-bg-primary tag" key={tag}>{tag}</span>
          )}
          <div className="alert alert-success tags" role="alert">
            This post has been reacted by {post.reactions} people!
          </div>
  </div>
</div>
    )
}

export default Post;