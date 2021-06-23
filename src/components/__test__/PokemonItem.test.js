import PokemonItem from "../PokemonItem";
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

it("pokemon-item-component, snapshot", () => {
    act(() => {
        render(<PokemonItem />, container)
    })
    expect(container).toMatchSnapshot();
});
