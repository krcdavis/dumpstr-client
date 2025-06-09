
//it works (:


import Axios from "axios";

import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import './App.css';

//import ThreadThing...
import PostAdder from './PostAdder';
import ThreadThing from './threadthing';

const URL = import.meta.env.VITE_URL || "http://localhost:5545/";


function BoardPage(params) {

  const { id } = useParams();
const [load, setLoad] = useState(true);

const [threads, setThreads] = useState([]);


function BoardContents() {
const contents = [];

for (const trd in threads) {
//i guess i'll swap to using last timestamp as key, for ordering purposes. so,
//const tid = threads[timestamp][0].tid//use that for ThreadThing key
//... that's really the only change

contents.push(
<ThreadThing key={threads[trd][0].tid} things={threads[trd]} />
);

}//threads

return(
<>
{contents}
</>
);

}//boardc


//next, here or in thread construction- change to threadstarter plus ~3 most recent posts if thread >~5 posts, sort by most recent post

function getThreads() {
Axios.get(URL+"getthreads", {params: {id}}).then((resp) => {
      //console.log(resp.status);//good
setThreads(resp.data); //yay :)
    });
}//get

if (load) {
setLoad(false);
getThreads();
console.log("board loading");
}

//directs you to the page of the new thread i guess?
//uh for now just reload the threads...
function newThreadUpdate(statu) {
//match result status... if errors, show error message
//^this could be done in PostAdder actually. let's do that
console.log("callb", statu);
//then just get threads?
getThreads();
}


return(
<div className="all">
<div className="contents">
<BoardContents />
</div>
      <div className="addpost1">{/* next: ... callback formatting?*/}
	<PostAdder id={id} callback={(event) => newThreadUpdate( event )}/>
      </div>
</div>
);

};

export default BoardPage