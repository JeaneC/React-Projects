console.log('App.js is running!')

// JSX - Javascript XML
// var template = <p>This is JSX from app.js!</p>
var appRoot = document.getElementById('app')

var template = React.createElement(
  "h1",
  { id: "someid" },
  "Something new"
);



ReactDOM.render(template, appRoot)
