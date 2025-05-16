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
<p><h2>Missing/In progress:</h2></p>
<ul>
<li>moderation tools</li>
<li>layout/css</li>
<li>No concurency/handing of multiple posts going through at the exact same time (site is nowhere near active enough for this to be a problem but I'd like to consider it anyway. concurrency or transactions maybe)</li>
<li></li>
</ul>

<p></p>




</>
);

}

export default About