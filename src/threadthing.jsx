

import React, { useState, useEffect } from 'react';

import PostBox from './postbox';
import ThreadBox from './threadbox';

function ThreadThing(postdata) {
//console.log(postdata.things);//clean this up pls

const posts = [];

for (const p in postdata.things) {
//console.log("aaa");
//console.log(p);

if (postdata.things[p]._id == postdata.things[p].tid) {
posts.push(
<ThreadBox key={postdata.things[p]._id} things={postdata.things[p]} />
);
}
else {
posts.push(
<PostBox key={postdata.things[p]._id} things={postdata.things[p]} />);
}
}//for posts


return(
<div className = "thread">
{posts}
</div>
);

}

export default ThreadThing;