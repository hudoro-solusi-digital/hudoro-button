import React from "react";
// import ReactDOM from "react-dom";
import {Button} from "../src";
import ReactDOM from "react-dom/client";

const App = () => (
  <div>
    <h1>Testing Button Component</h1>
    <Button onClick={() => {}} disabled buttonType="link">
      Click Me!!!
    </Button>
  </div>
);

// ReactDOM.render(<App />, document.getElementById("app"));

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
