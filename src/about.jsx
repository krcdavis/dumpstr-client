//revive the anomalog router thing that automates page layouts
//it's actually just a simple component (:


import './App.css';

function About() {


return(
<>
<p><h1>About Dumpstr</h1></p>
<p>Dumpstr is a simple experimental imageboard-type website. made using MERN stack</p>
<p>The password is a simple measure to discourage easy drive-by spamming. It's not proper authentication and is not meant to be. If you want the password, contact me; if you have no means of contacting me, you're probably not getting the password anyway</p>

<p><h2>Features:</h2></p>
<ul>
<li>Make posts across various boards- create a new thread or add to an existing one</li>
<li>Hotlink images from external sites (would not be the case with a fully developed website but this simplifies things on my end vs implementing image uploads)</li>
<li></li>
</ul>
<p><h2>Features in progress:</h2></p>
<ul>
<li>Verifying image urls, requiring them for thread-opening posts or when a reply post has no text, possibly restricting them to certain domains</li>
<li>Sort threads on board page by most recent reply and show only the X most recent ones; add a catalog page; archive and eventually remove threads that haven't receieved replies in some time</li>
<li>layout/css</li>
<li></li>
</ul>
<p><h2>future considerations:</h2></p>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li>moderation tools</li>
<li>No concurency/handing of multiple posts going through at the exact same time</li>
</ul>

<p></p>




</>
);

}

export default About