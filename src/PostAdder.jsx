import { useState } from 'react';
import Axios from "axios";

//pass in board, thread etc on page creation


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
function PostAdder({pagedata}) {

const [nname, setName] = useState("anonymouse");
const [imgurl, setImgurl] = useState("");

const [postBody, setPostBody] = useState("");//but textarea

//temporary manually set
const [tid, setTid] = useState(0);
const [id, setId] = useState(0);
const [board, setBoard] = useState("dump");
//board

//lol
const [pw, setPw] = useState("");

///makepost
function makePost(things) {
//same but no title, add thread id
console.log("que?");
console.log(things);


//just use normal post for now
    Axios.post(URL+"post", things).then(() => {
      console.log("ok");
});

//actually no board for now because it uses collections...
//but board does need to be passed in
//create some collections and... a dropdown list?
}


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

//not used
const postbodata = {
name: "post",
value: postBody,
setter: setPostBody
};

const iddata = {
name: "id(manual)",
value: id,
setter: setId
};

const tiddata = {
name: "thred id(manual)",
value: tid,
setter: setTid
};


const boarddata = {
name: "board (manual)",
value: board,
setter: setBoard
};

const pwData = {
name: "password",
value: pw,
setter: setPw
};


//next: add boards as collections...
//add some way to track last/highest post number
//add to backend: get timestamp when adding post
//and some kind of user id (IP, cookie....)

//-set board and tid based on pagedata

const obj = {
name: nname,
imgurl: imgurl,
postbody: postBody,
id: id,
tid: tid,
board: board,
pw: pw
}

return(<>
        add a post (manually)

<label>board(manual): 
<select name="boards" id="boards" onChange={ (event) => setBoard( event.target.value ) }>
  <option value="dump">Dump</option>
  <option value="tech">Tech</option>
  <option value="weeb">Weeb</option>
  <option value="dont">Don't</option>
</select></label>

<EditLine data = {namedata} />
<EditLine data = {imgdata} />
<label>post body:
<textarea id="postbody" name="postbody" rows="5" cols="30"
onChange={ (event) => setPostBody( event.target.value ) }
></textarea>
</label>
<EditLine data = {iddata} />
<EditLine data = {tiddata} />
<EditLine data = {pwdata} />

<button onClick={() => makePost(obj)}>Post</button>

</>
)
}//postadder...


export default PostAdder