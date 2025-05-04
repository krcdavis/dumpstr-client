
import Axios from "axios";

import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import './App.css';

import PostAdder from './PostAdder';
import ThreadBox from './threadbox';
import PostBox from './postbox';
//threadbox, postbox


function BoardPage(props) {

  const { id } = useParams();
const [load, setLoad] = useState(true);

//const params = useParams();
//console.log(params);//well tid is there...
//funny idea: if tid exists, return a threadpage with the data, else return boardpage...

const [threads, setThreads] = useState([]);
//posts will be arrays within arrays of above... i guess


//uh
const URL = import.meta.env.VITE_URL || "http://localhost:5545/";


//two options:
//threadbox contains first post, then array of postboxes
//thread component contains a threadbox followed by postboxes


function BoardContents() {
const contents = [];

for (const trd in threads) {


////////////////////////////////////////////////////////////////////////////////
const posts = [];
//pop(shift) first post into a threadbox, then rest postboxes
//const firstp = threads[trd].shift();
//uh this doesn't work

//posts.push(<ThreadBox key={firstp._id} things={firstp} />);

for (const p in threads[trd]) {
//console.log(threads[trd][p]);

//whatever lol

if (threads[trd][p]._id == trd) {
posts.push(<ThreadBox key={threads[trd][p]._id} things={threads[trd][p]} />);
}
else {
posts.push(
<PostBox key={threads[trd][p]._id} things={threads[trd][p]} />
);
}
}//for posts
////////////////////////////////////////////////////////////////////////////////


//make thread a component to reuse between board pages and thread pages
contents.push(
<div className="thread" key={trd}>
{posts}
</div>
);
}//threds

return(
<>
{contents}
</>
);

}//board


//next, here or in thread construction- change to threadstarter plus ~3 most recent posts if thread >~5 posts

function getThreads() {
Axios.get(URL+"getthreads", {params: {id}}).then((resp) => {
      console.log(resp.data);
setThreads(resp.data); //yay :)
    });
}//get

if (load) {
setLoad(false);
getThreads();
console.log("trying");
}

return(
<div className="all">
<div className="contents">
<BoardContents />
</div>
      <div className="addpost1">{/* next: ...*/}
	<PostAdder />
      </div>
</div>
);
};

export default BoardPage