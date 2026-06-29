import React, { useState } from "react";
import "./App.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
import CreatePost from "../component/CreatePost";
import PostList from "../component/PostList";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
