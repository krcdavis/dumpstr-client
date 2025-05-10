//temp wipe...

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
//add threadthing to contents
contents.push(
<ThreadThing key={threads[trd][0]._id} things={threads[trd]} />
);
//posts.push(<ThreadBox key={threads[trd]._id} things={threads[trd]} />);

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
      //console.log(resp.data);
setThreads(resp.data); //yay :)
    });
}//get

if (load) {
setLoad(false);
getThreads();
console.log("board loading");
}

const datas = {id: id};

return(
<div className="all">
<div className="contents">
<BoardContents />
</div>
      <div className="addpost1">{/* next: ...*/}
	<PostAdder id={id}/>
      </div>
</div>
);

};

export default BoardPage