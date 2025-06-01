
import { Link } from "react-router";

//add: link to thread by id

//add: header etc
//title; postername, date, time, userid?, postid
function ThreadBox ( {things} ) {
//things.title, image, postbody, timestamp, _id, tid(self), username

//date(timestamp).toString() ?

//postbody- flex row img and posttext?
//css float left/right?
//<img src="website_art.png" height= "75" width="235" style="float:left;"/>
//things.imgurl

//eh fuggit
const str = things._id+"/";
//amazingly enough this works... no leading /

const img = []
//if imgurl exists, add img src
//if (things.imgurl){
img.push( <img src={things.imgurl} height= "135" width="175" key={things._id}/> );
//}
//else, null/placeholder image.
//for now, reverted back to having a broken image if imgurl is missing/invalid

return (
<div className="threadbox">
<div className = "tHeader">
{things.title} | Jan 2 1970 22:22:22 <Link to={str} >{things._id}</Link> {things.name}:
</div>
<div className="postBody">
{img} {things.postbody}
</div>
</div>
);

}//thred


export default ThreadBox