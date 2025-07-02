//should be same between board and thread pages
//using axios to pull board data from database is overkill... but it's still reused in a few places, so have a copy of data clientside in some form.
//will use Link

//board/thread pages have board description/banner/etc
//thread pages have board backlink(same as above?)
//probably components within components, as the link row is reused for footer

import { Link } from "react-router";

function PageHeader() {
//row of boards
const row = [];
//for board in boards, add link to board | /b/ | /c/ | /d/ |
//[ a / b / c ]...
//<Link to=`/board/${b}' key={b}> /{b}/ </Link>

//for now
const boards = ["dump","game","weeb","news"];

for (const b in boards) {
const limk = "/board/"+boards[b]
row.push( <Link to={limk} key={boards[b]}> /{boards[b]}/ </Link> );
}

return(
<div className="header">
{row}
</div>
);


}


export default PageHeader;