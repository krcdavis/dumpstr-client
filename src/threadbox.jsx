

//add: link to thread by id

//add: header etc
//title; postername, date, time, userid?, postid
function ThreadBox ( {things} ) {
//things.title, image, postbody, timestamp, _id, tid(self), username

//date(timestamp).toString() ?

//postbody- flex row img and posttext?
//css float left/right?
//<img src="website_art.png" height= "75" width="235" style="float:left;"/>


return (
<div className="threadbox">
<div className = "tHeader">
(has anyone ever go so far) | Jan 2 1970 22:22:22 {things._id} {things.name}:
</div>
<div className="postBody">
[img] {things.postbody}
</div>
</div>
);

}//thred


export default ThreadBox