import React from "react";

import Greg from '../assets/Greg.jpg'
import './Hero.css'

const Hero = () => (
  <div>
    <div className="Hero">
      <h1 className="Hero-message">When the Sky isn't the Limit...</h1>
      <img src={ Greg } alt='Greg Cruz'/>
      <div className="Hero-body">
        <p>My name is Greg Cruz.</p>
        <p>I'm a software developer, prose writer, and major gaming enthusiast including (but not limited to) video gaming, VR, Wargaming, RPGs, and general tabletop gaming.</p>
        <p>Currently I'm searching for my first big break into the tech industry. I'm hoping to find a gig in my native Vancouver, WA or its sister-city, Portland, OR; however, I am also open to relocating and have searched for positions in Seattle, San-Francisco, Spokane, and Vancouver BC.</p>
        <p>I've acquired certification in Python, HTML/CSS, JavaScript, and Django. I am presently also taking classes for Node.js and React (which I used to craft the lovely page before you) and continue to have a side-fascination with Java as a language.</p>
        <p>My current goal is to create a React-Native app which I will then publish on the Google Play Store. My ideal job would be one where I not only would be able to utilize the coding expertise that I have learned, but one that would also encourage me to add even more coding languages/frameworks to my repertoire (Ruby, C#, and angular to name a few).</p>
        <p>If you would like to contact me, feel free to check out my [contact page].</p>
        <p>Thanks for stopping by!</p>
      </div>
    </div>
  </div>
);
export default Hero;