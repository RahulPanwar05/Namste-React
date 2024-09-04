// <div id="parent">
// <div id="child">
//     <h1 heading="h1">heading</h1>
//     <h2 heading="h1">heading</h2>
// </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "this is h1"),
    React.createElement("h2", { id: "heading2" }, "this is h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading3" }, "this is h1"),
    React.createElement("h2", { id: "heading4" }, "this is h2"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
