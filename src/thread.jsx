
import Axios from "axios";

import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import './App.css';

import PostAdder from './PostAdder';
//threadbox, postbox



function ThreadPage(props) {

  const { id } = useParams();
const [load, setLoad] = useState(true);

const [posts, setPosts] = useState([]);
//just an array of posts with thread starter as first

//I should put this somewhere shared...
const URL = import.meta.env.VITE_URL || "http://localhost:5545/";


//this but posts for specified thread id
function getPosts() {
Axios.get(URL+"getposts", {params: {id}}).then((resp) => {
      console.log(resp.data);
setPosts(resp.data); //yay :)
    });
}//get

if (load) {
setLoad(false);
getPosts();
console.log("loading");
}


function ThreadContents() {
const contents = [];


//next: <div className="thread"> {threadbox followed by postboxes} </div>
//uhhh pop the first one off the array then do for?

for (const trd in threads) {

const posts = [];
for (const p in threads[trd]) {
//console.log(threads[trd][p]);
posts.push(
<PostBox key={threads[trd][p]._id} things={threads[trd][p]} />
);
}//for posts

}



//next: pass in board & thread id to postadder, or ...

return(
<div>
<div className="contents">
<ThreadContents />
</div>
      <div className="addpost1">
	<PostAdder />
      </div>
</div>
);
};

export default ThreadPage