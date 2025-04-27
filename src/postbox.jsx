
function PostBox( {things} ) {
//added as children of threadbox.
//things._id, tid, postbody, img, timestamp, username
return (
<div className="postbox">
<div className = "pHeader">
Jan 2 1970 22:22:22 {things._id} {things.name}:
</div>
<div className="postBody">
 {things.postbody}
</div>
</div>
);

}//post


export default PostBox