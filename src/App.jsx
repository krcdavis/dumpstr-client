import { useState } from 'react'
import Axios from "axios";
//router...

import './App.css';

//import components for board pages, thread pages, catalog pages...
import PostAdder from './PostAdder';


function App() {

//const [boards, setBoards] = useState([]);//hardcode it
const boards = ["dump","tech","weeb"];


//server url...
const URL = import.meta.env.VITE_URL || "http://localhost:5545/";

function makeThread( {things} ) {
//package up title(optional), post, username, image, password and send
//timestamp and _id assigned on posting

}
//for now just get dumps or whatever

  return (
    <>
      <div>Homepage
      </div>
      <div className="posts">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="addpost1">{/* next: ...*/}
	<PostAdder />
      </div>
    </>
  )
}

export default App
