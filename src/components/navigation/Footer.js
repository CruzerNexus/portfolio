import React from "react";

import { Footer, Container, Content } from "react-bulma-components";

import './Footer.css'

const FootBar = () => (
  <Footer className="Footer">
    <Container>
      <Content className="Content">
        <div className="foot-text">
          <p id="copyright">&copy;2019 Gregory Cruz</p>
          <p id="pexels">
            Images via <a href="https://www.pexels.com/">Pexels.com</a>
          </p>
        </div>
      </Content>
    </Container>
  </Footer>
);

export default FootBar;
