import Header from "../Header";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("header-component, snapshot", () => {
    act(() => {
        render(
            <Router>
                <Header />
            </Router>,
            container
        );
    });
    expect(container).toMatchSnapshot();
});
