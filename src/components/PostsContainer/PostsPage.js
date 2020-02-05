//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
export const PostsPage = props => {
  console.log(props)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.postData.map((data,index) => {
        return <Post key={index} post={data}/>
      })};

    </div>
  );
};

export default PostsPage;

