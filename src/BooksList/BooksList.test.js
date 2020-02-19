import React from "react";
import ReactDOM from "react-dom";
import BooksList from "./BooksList";

// Smoke test
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BooksList />, div);
    ReactDOM.unmountComponentAtNode(div);
});
