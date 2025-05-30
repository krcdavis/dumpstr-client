
import { Link } from "react-router";

//next (of many): id is Link to thread/post
//set timestamp properly

function PostBox( {things} ) {
//added as children of threadbox.
//things._id, tid, postbody, img, timestamp, username

//timestamp
let timestamp = "Jan 2 1970 22:22:22";


const img = []
//if imgurl exists, add img src
if (things.imgurl){
img.push( <img src={things.imgurl} height= "135" width="175" key={things._id}/> );
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