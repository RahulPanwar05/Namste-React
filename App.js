import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

let jsxHeading = <h1 id="heading">This is a jsx heading </h1>;

// jsx is html like syntax its not htm
// jsx is not a valid javascript that why we need babel to transpile jsx to react element

// react functional component

const TitleComponent = () => {
  return <h1>just a title component</h1>;
};

// component composition
const HeadingComponent = () => {
  return (
    <div>
      <TitleComponent />
      {Math.floor(Math.random() * 10)}
      <h1>just a react heading component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
