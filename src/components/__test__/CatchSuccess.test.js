import CatchSuccess from "../CatchSuccess";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

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

it("loading-component, snapshot", () => {
    act(() => {
        render(<CatchSuccess />, container)
    })
    expect(container).toMatchSnapshot();
});
