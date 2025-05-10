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
      console.log("resp ",resp.data);
setPosts(resp.data); //yay :)  not yay ):
    });
}//get

if (load) {
setLoad(false);
getPosts();
console.log("loading thred");
}

//and now just load a single threadthing (:

const datas = {id: id, tid: tid};

//console.log("posts ",posts);

return(
<div className="all">
<div className="contents">
<ThreadThing key={tid} things={posts} />
</div>
      <div className="addpost1">
	<PostAdder id={id} tid={tid}/>
      </div>
</div>
);

}

export default ThreadPage