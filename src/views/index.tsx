import { render } from "preact";

const App = () => {
  return <h1>Title</h1>;
};

const doc = document.getElementById("app");

if (doc) {
  render(<App />, doc);
}
