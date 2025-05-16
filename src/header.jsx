//should be same between board and thread pages
//using axios to pull board data from database is overkill... but it's still reused in a few places, so have a copy of data clientside in some form.
//will use Link

import { Link } from "react-router";

function PageHeader() {
//row of boards
const row = [];
//for board in boards, add link to board | /b/ | /c/ | /d/ |
//[ a / b / c ]...
//Link to="/board/"+board

return(
<div className="header">
{row}
</div>
);


}


export default PageHeader;