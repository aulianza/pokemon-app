import Button from "../Button";
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

it("button-component, snapshot", () => {
    act(() => {
        render(<Button />, container)
    })
    expect(container).toMatchSnapshot();
})

it("should render button correctly", () => {
    act(() => {
        render(<Button title="Catch Now!" />, container)
    })
    expect(container).toBeTruthy();
});
