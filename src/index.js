import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      
          <App/>
        
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

