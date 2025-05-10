

//next (of many): id is Link to thread/post
//set timestamp properly

function PostBox( {things} ) {
//added as children of threadbox.
//things._id, tid, postbody, img, timestamp, username

//timestamp
let timestamp = "Jan 2 1970 22:22:22";

return (
<div className="postbox">
<div className = "pHeader">
{timestamp} #{things._id} {things.name}:
</div>
<div className="postBody">
 {things.postbody}
</div>
</div>
);

}//post


export default PostBox