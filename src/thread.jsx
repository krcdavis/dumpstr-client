//temp wipe


import Axios from "axios";

import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import './App.css';

//import ThreadThing...
import PostAdder from './PostAdder';
import ThreadThing from './threadthing';

const URL = import.meta.env.VITE_URL || "http://localhost:5545/";



function ThreadPage(params) {

  const { id, tid } = useParams();
const [load, setLoad] = useState(true);


const [posts, setPosts] = useState([]);

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

//and now just load a single threadthing (:

return(
<div>
<div className="contents">
<ThreadThing key={tid} things={posts} />
</div>
      <div className="addpost1">
	<PostAdder />
      </div>
</div>
);

}

export default ThreadPage