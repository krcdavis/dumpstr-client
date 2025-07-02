//revive the anomalog router thing that automates page layouts
//it's actually just a simple component (:


import './App.css';
import PageHeader from './header';

function About() {

return(
<>
<PageHeader />
<h1>About Dumpstr</h1>
<p>Dumpstr is a simple experimental imageboard-type website, made using the MERN stack- MongoDB, Express, React js and Node js.</p>

<h2>Features:</h2>
<ul>
<li>Site constructed with a React frontend and a MondoDB database. Uses modular, reusable React components to construct thread and board pages.</li>
<li>Make posts across various boards- create a new thread or add to an existing one</li>
<li>Hotlink images from external sites (would not be the case with a fully developed website but this simplifies things on my end vs implementing image uploads, moderating images etc)</li>
<li></li>
</ul>
<h2>Features in progress (some of these might have been implemented since this page was updated):</h2>
<ul>
<li>Verifying image urls, requiring them for thread-opening posts or when a reply post has no text, possibly restricting them to certain domains</li>
<li>Sort threads on board page by most recent reply and show only the X most recent ones; add a catalog page; archive and eventually remove threads that haven't received replies in some time</li>
<li>layout/css (graphic design is not my passion); properly resize images</li>
<li>Board and thread page headers linking to other boards/homepage/back to current board for thread pages</li>
<li>fix timestamps; have timestamps reflect the user's time zone</li>
<li> <font color="green">&gt;quotes</font>, as well as the ability to link/refer back to previous post IDs. This will likely need some sort of text analysis. Regex?  </li>
<li></li>
</ul>
<h2>Future considerations that would be made if this became a proper project with a significant number of users:</h2>
<ul>
<li>handling of multiple posts going through at the exact same time</li>
<li>moderation tools, filters, input sanitization</li>
<li>user tracking... </li>
<li>Streamlining and efficiency. The board pages currently suffer from the N+1 problem, running one query to get all active thread IDs then running N queries to get the posts for each thread. I should be able to combine everything into one query using the aggregate function which is already used to get thread IDs and each thread's last post's timestamp, but it's not a huge priority as the project is now.</li>
<li>caching</li>
<li>Special rules per board, like perhaps the News board disallows user-created threads and only has threads for "official" news, or those official threads get highlighted or pinned somehow</li>
<li></li>
</ul>

<p>The password is a simple measure to discourage easy drive-by spamming. It's not proper authentication and is not meant to be. If you want the password, contact me; if you have no means of contacting me, you're probably not getting the password anyway</p>


</>
);

}

export default About