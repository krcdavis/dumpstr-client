//if tid exists in params/url, load a thread page. else, load board.
//axios etc only used in boardpage and threadpage themselves...

import { Link, useParams, useNavigate } from 'react-router-dom';

//boardpage, threadpage
import BoardPage from "./board.jsx";
import ThreadPage from './thread';

//next: after replacing board/thread with testing dummies, rebuild them with better component use

function BoardOrThread(props) {

const params = useParams();

//if ('tid' in params)
if (params.hasOwnProperty('tid')) {
return(
<ThreadPage params={params} />
);
}
//else...
return(
<BoardPage params={params} />
);

}

export default BoardOrThread;