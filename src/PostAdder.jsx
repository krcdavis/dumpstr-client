import { useState } from 'react';
import Axios from "axios";

import parseUrl from "parse-url";

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


//https://i.kym-cdn.com/photos/images/original/001/956/029/c8d.png
//to do: do
function checkUrl(iurl) {

const parse = parseUrl(iurl);
console.log(parse);
//if parse.parse_failed, return false
if (parse.parse_failed) {
 return(false);
}
//perhaps include some indicator of failure reason...

//check parse.host against whitelist; check extension ?
//iurl.split('.')[-1]
//multiple extensions like .tar.gz are irrelevant; filenames like this.dot.png can be ignored
//not actually right eg archive.org ...

return(true);
}


//////////////////
//pagedata- board, thread (optional/unused on board page/thread adder- second component?)
//if starting new thread, pass -1
//break it into boardid and tid, with a default?



//also, pass in a function to use after receiving results of post- update page or display error message ?
function PostAdder(pagedata) {

//console.log(pagedata);//there...

//console.log( pagedata.tid ? pagedata.tid : -1);// (:

//console.log(pagedata.callback);//ok...
const callback = pagedata.callback;

const [nname, setName] = useState("anonymouse");
const [imgurl, setImgurl] = useState("");

const [postBody, setPostBody] = useState("");//but textarea

const [tid, setTid] = useState(pagedata.tid ? pagedata.tid : -1);// :)
//const [id, setId] = useState(0);
const [board, setBoard] = useState("dump");
//board

const [title, setTitle] = useState("");

//lol
const [pw, setPw] = useState(import.meta.env.VITE_HOMEPW || "");//
//set to env || "" for local only pw autofill (:

const [message, setMessage] = useState("");

///makepost
function makePost(things) {
//same but no title, add thread id
console.log("que?");
console.log(things);

//next: verify things like- if new thread require (valid) imgurl, req either postbody or title text, etc
//password still checked on serverside for obscurity. not the best practice but not the worst

//also, set error message based on- last error encountered I guess? because each next one will override it

let verified = true;
//if tid == -1, req title or postbody text, verify+require url (function shared with post)
//else, req url(verified) or postbody text

if (tid == -1) {
//if !things.postbody and !things.title, verfied = false
if (!things.postbody && !things.title) {
  verified = false;
  setMessage("you need post text or a title");
}
//if no/invalid imgurl, set false
 if (!things.imgurl || !checkUrl(imgurl)) {
  verified = false;
  setMessage("invalid image url (required for new threads)");
 }

} else {
//if no url, require postbody. else, verify url.
 if (things.imgurl) {
 if (!checkUrl(imgurl)) {
  verified = false;
  setMessage("invalid image url");
 }

} else {
  if (!things.postbody) {
   verified = false;
  setMessage("you need post text or an image url");
  }
};
}//else else


//};
//by now if something's wrong, verified should be set to false. so only continue if still trie


//just use normal post for now
//create thread just adds title, could be handled on server end (is)
if (verified) {
    Axios.post(URL+"post", things).then((res) => {
      //console.log(res);//data and status have it... status text is "OK" for error. ?
//data.insertedue
//next: obtain and handle results. -done
setMessage("sending...");
const sta = res.data.status ?? res.status;//lmao
switch (sta) {
 case 200:
  //success. call callback function for board/thread page to do whatever
  setMessage("");
callback("aaa");
//and clear editlines
setTitle("");
setImgurl("");
setPostBody("");

break;
 case 401:
  //errors. further matching? -set an otherwise empty {variable} to error message
  setMessage("an error occurred");
callback("bbb");

};//switch

});//then
}//if v

}//make


//next: if pagedata.tid exists/tid == -1, format as a... not new thread actually
//so if it doesn't and is the add post thing on a board page, add title and require imgurl
//like message, create an empty variable and add title box to it if needed.

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

const titledata = {
name: "title",
value: title,
setter: setTitle
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
pw: pw,
title: title
}

const titl = [];
if (tid == -1) {
titl.push( <EditLine data = {titledata} /> );
};

return(<>
        add a post 
{titl}
<EditLine data = {namedata} />
<EditLine data = {imgdata} />
<label>post body:
<textarea id="postbody" name="postbody" rows="5" cols="30"
onChange={ (event) => setPostBody( event.target.value ) }
></textarea>
</label>
<EditLine data = {pwdata} />

<button onClick={() => makePost(obj)}>Post</button>
{message}

</>
)
}//postadder...


export default PostAdder