import { useState } from 'react'
import { Link } from "react-router";
import Axios from "axios";
//router...

import './App.css';

//import components for board pages, thread pages, catalog pages...
import PostAdder from './PostAdder';


function App() {


//server url...
const URL = import.meta.env.VITE_URL || "http://localhost:5545/";


//for now just get dumps or whatever

  return (
    <>
      <div><h1>Welcome to dumpstr</h1>
      </div>
      <div className="boards">
        <p>
          <Link to="/board/dump/">/dump/</Link> -
        </p>
        <p>
          <Link to="/board/weeb/">/weeb/</Link> -
        </p>
        <p>
          <Link to="/board/tech/">/tech/</Link> -
        </p>
        <p>
          <Link to="/board/game/">/game/</Link> - gaming gamers gamer gameringly
        </p>
      </div>
<p>
<Link to="/about/">About Dumpstr</Link>
</p>
    </>
  );

}

export default App
