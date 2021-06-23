import Container from "../Container";
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

it("container-component, snapshot", () => {
    act(() => {
        render(
            <Router>
                <Container />
            </Router>,
            container
        );
    });
    expect(container).toMatchSnapshot();
});
