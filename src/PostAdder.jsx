import { useState } from 'react';
import Axios from "axios";

//pass in board, thread etc on page creation


//uh
const URL = import.meta.env.VITE_URL || "http://localhost:5545/";

/////////////////
function EditLine({data}) {
return(
 <label>{data.name}:
  <input
   type="text"
   value={data.value}
   onChange={(event) => {
    data.setter(event.target.value);
   }
  }
/>{/* /input */}
 </label>
)
}
////////////////


//////////////////
//pagedata- board, thread (optional/unused on board page/thread adder- second component?)
//if starting new thread, pass -1
//break it into boardid and tid, with a default?

//also, pass in a function to use after receiving results of post- update page or display error message ?
function PostAdder(pagedata) {
//console.log(pagedata);//there...

//console.log( pagedata.tid ? pagedata.tid : -1);// (:

const [nname, setName] = useState("anonymouse");
const [imgurl, setImgurl] = useState("");

const [postBody, setPostBody] = useState("");//but textarea

const [tid, setTid] = useState(pagedata.tid ? pagedata.tid : -1);// :)
//const [id, setId] = useState(0);
const [board, setBoard] = useState("dump");
//board

//lol
const [pw, setPw] = useState(import.meta.env.VITE_HOMEPW || "");//
//set to env || "" for local only pw autofill (:



///makepost
function makePost(things) {
//same but no title, add thread id
console.log("que?");
console.log(things);

//just use normal post for now
//create thread just adds title, could be handled on server end (is)
    Axios.post(URL+"post", things).then(() => {
      console.log("ok");
//next: obtain and handle results
});

}//make


const namedata = {
name: "user name",
value: nname,
setter: setName
};

const imgdata = {
name: "img url",
value: imgurl,
setter: setImgurl
};


const pwdata = {
name: "password",
value: pw,
setter: setPw
};

//next:
//and some kind of user id (IP, cookie....)

//-set board and tid based on pagedata... done w/ usestates above

const obj = {
name: nname,
imgurl: imgurl,
postbody: postBody,
tid: tid,//postdata.tid
board: pagedata.id,
pw: pw
}

return(<>
        add a post 

<EditLine data = {namedata} />
<EditLine data = {imgdata} />
<label>post body:
<textarea id="postbody" name="postbody" rows="5" cols="30"
onChange={ (event) => setPostBody( event.target.value ) }
></textarea>
</label>
<EditLine data = {pwdata} />

<button onClick={() => makePost(obj)}>Post</button>

</>
)
}//postadder...


export default PostAdder