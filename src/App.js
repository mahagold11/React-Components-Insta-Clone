/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import "./components/PostsContainer/PostsPage";
import {SearchBar} from"./components/SearchBar/SearchBarContainer";
// import dummydata
import "./dummy-data"
import {dummyData} from "./dummy-data";
import {PostsPage} from "./components/PostsContainer/PostsPage"



const App = () => {

  // set up state for the dummy data and pass to your PostsPage
  
  const [initialState] = useState(dummyData);
  
  // console.log(postData)
  
  const [postData] = useState(initialState);
  
  return (
    <div className="App">
      <SearchBar />
{/* Add components here  and pass props where appropriate  */}
      <PostsPage postData = {postData} />

    </div>
  );
};


export default App;
