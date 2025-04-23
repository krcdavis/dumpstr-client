
function PostBox( {things} ) {
//added as children of threadbox.
//things._id, tid, postbody, img, timestamp, username
return (
<div className="postbox">
{things._id} {things.name} {things.postbody}
</div>
);

}//post


export default PostBox