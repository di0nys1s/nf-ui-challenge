import ReactDOM from "react-dom";
import App from "./App";

test("Renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("p").textContent).toBe("My apps");
});
