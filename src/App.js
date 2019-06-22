import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';

import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
  <main>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  </main>
  );
}

export default App;
