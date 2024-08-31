import React,{ StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import React from "react";
import App from "./App.jsx";
import Chai from "./Chai.jsx";

function Coffee() {
  return <h1>Pranay is drinking Coffee</h1>;
}
export default Coffee;

const antotherElement = (
  <h1>
    <a href="https://google.com" target="_blank">
      visit
    </a>
  </h1>
);

const anotherUser="Harsh";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click here to visit google",
  anotherUser
);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <>
  reactElement 
  // <App />
  // <Chai />
  // <Coffee />
  // </>
  // </StrictMode>,
);
