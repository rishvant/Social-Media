import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import NoPost from "./noPost";
import Loading from "./Loading";

const PostList = () => {
    const { postList, addPosts } = useContext(PostListData);

    const [fetching, setFetching] = useState(false);

    // useEffect(() => {
    //     const controller = new AbortController;
    //     const signal = controller.signal;

    //     setFetching(true);
    //     fetch('https://dummyjson.com/posts', { signal })
    //     .then(res => res.json())
    //     .then(data => {
    //     addPosts(data.posts);
    //     setFetching(false);
    //     });

    //     return () => {
    //         controller.abort();
    //     }

    // }, []);

    return (
        <>
            {fetching && <Loading></Loading>}
            {!fetching && postList.map((post) => <Post key={post.id} post={post}></Post>)}
        </>
 )   
}

export default PostList;