//this is just a shoddy old copy of boardpage, fix various things

import Axios from "axios";

import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import './App.css';

import PostAdder from './PostAdder';
import ThreadBox from './threadbox';
import PostBox from './postbox';
//threadbox, postbox


//gets both board name and thread id, somehow ...
function ThreadPage(props) {

  const { id, tid } = useParams();//...
console.log(tid);
const [load, setLoad] = useState(true);


const [posts, setPosts] = useState([]);
//just an array of posts with thread starter as first

//I should put this somewhere shared...
const URL = import.meta.env.VITE_URL || "http://localhost:5545/";



//this but posts for specified thread id... and board (id)...
function getPosts() {
Axios.get(URL+"getposts", {params: {id, tid}}).then((resp) => {
      console.log(resp.data);
setPosts(resp.data); //yay :)
    });
}//get

if (load) {
setLoad(false);
getPosts();
console.log("loading");
}


//update to match board page, maybe make another component
function ThreadContents() {
const contents = [];


//next: <div className="thread"> {threadbox followed by postboxes} </div>
//uhhh pop the first one off the array then do for?

const ps = [];
for (const p in posts) {
//console.log(threads[trd][p]);
ps.push(
<PostBox key={posts[p]._id} things={posts[p]} />
);
}//for posts


return(
<>
{ps}
</>
);

}//threadcontents...

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