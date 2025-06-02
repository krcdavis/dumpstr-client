//revive the anomalog router thing that automates page layouts
//it's actually just a simple component (:


import './App.css';

function About() {


return(
<>
<h1>About Dumpstr</h1>
<p>Dumpstr is a simple experimental imageboard-type website. made using MERN stack</p>
<p>The password is a simple measure to discourage easy drive-by spamming. It's not proper authentication and is not meant to be. If you want the password, contact me; if you have no means of contacting me, you're probably not getting the password anyway</p>

<h2>Features:</h2>
<ul>
<li>Site constructed with a React frontend and a MondoDB database</li>
<li>Make posts across various boards- create a new thread or add to an existing one</li>
<li>Hotlink images from external sites (would not be the case with a fully developed website but this simplifies things on my end vs implementing image uploads)</li>
<li></li>
</ul>
<h2>Features in progress (some of these might have been implemented since this page was updated):</h2>
<ul>
<li>Verifying image urls, requiring them for thread-opening posts or when a reply post has no text, possibly restricting them to certain domains</li>
<li>Sort threads on board page by most recent reply and show only the X most recent ones; add a catalog page; archive and eventually remove threads that haven't receieved replies in some time</li>
<li>layout/css (graphic design is not my passion)</li>
<li>fix timestamps; have timestamps reflect the user's time zone</li>
<li></li>
</ul>
<h2>Future considerations that would be made if this became a proper project with a significant number of users:</h2>
<ul>
<li>handling of multiple posts going through at the exact same time</li>
<li>moderation tools</li>
<li></li>
</ul>

<p></p>




</>
);

}

export default About