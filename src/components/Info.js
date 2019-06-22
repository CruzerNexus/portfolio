import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import './Info.css'

const Info = () => (
  <div className="Info">
    <h1 className="Heading">Important Links and How to Reach Me.</h1>
    <div className="Contact">
      {/* Here will be a contact-me form tied to my email. */}
      <div className="Icons">
        <FontAwesomeIcon className="GitHub" icon={faGithubSquare} size="6x" />
        <FontAwesomeIcon className="LinkedIn" icon={faLinkedin} size="6x" />
      </div>
      <form>
        <p className="MiniHead">Send me a message, I'd love to hear from you!</p>
        <div className="Input">
          <div className="Title">
            <input type="text" className="subject" placeholder="Title..." />
          </div>
          <div className="Body">
            <textarea className="body" placeholder="Body..."></textarea>
          </div>
          <button type="submit" className="submit">Submit</button>
        </div>
      </form>
      {/* Here will be icons for my LinkedIn and GetHub with links to each embedded. */}
    </div>
  </div>
);

export default Info;
