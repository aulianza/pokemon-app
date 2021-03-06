import App from "./App";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { MockedProvider } from "@apollo/client/testing";
import { mocksData } from "./graphql/mocks/mocksData";

const data = mocksData;
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

it("app, snapshot", () => {
    act(() => {
        render(
            <MockedProvider mock={data}>
                <App />
            </MockedProvider>,
            container
        );
    });
    expect(container).toMatchSnapshot();
});
