import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./App.css";
import CreatePost from "./components/createPost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  
  return (
    <PostListProvider>
      <div className="item-container">
      <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab}></Sidebar>
      <div className="content">
          <Navbar></Navbar>
            {selectedTab === "Home" ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
        <Footer></Footer>
      </div>
      </div>
    </PostListProvider>
  )
}

export default App;