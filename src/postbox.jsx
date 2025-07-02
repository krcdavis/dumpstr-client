
import { Link } from "react-router";

//next (of many): id is Link to thread/post
//set timestamp properly

function PostBox( {things} ) {
//added as children of threadbox.
//things._id, tid, postbody, img, timestamp, username

//timestamp lol
let timestamp = "Jan 2 1970 22:22:22";
//timestamp = things.timestamp
//local time is by default apparently...
const tp = new Date(things.timestamp);

//months lol
const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
const w = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]

//backticks and cashtags. right
//...that year's not right wat
timestamp = `${w[tp.getDay()]}, ${tp.getYear()+1900} ${m[tp.getMonth()]} ${tp.getDate()} ${tp.getHours()}:${tp.getMinutes()}:${tp.getSeconds()}`

//this is probably enough to be worth making into its own component to be shared between threadbox and postbox

const img = []
//if imgurl exists, add img src
if (things.imgurl){
img.push( <img src={things.imgurl} height= "130" width="170" key={things._id}/> );
}
//else, null/placeholder image.

//lol
const str = things.tid+"#"+things._id;

return (
<div className="postbox">
<a id={things._id} />
<div className = "pHeader">
{timestamp} #<Link to={str} >{things._id}</Link> {things.name}:
</div>
<div className="postBody">
{img} {things.postbody}
</div>
</div>
);

}//post


export default PostBox