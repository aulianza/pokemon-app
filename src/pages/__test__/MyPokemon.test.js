import MyPokemon from '../MyPokemon';
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

it("my-pokemon, snapshot", () => {
    act(() => {
        render(<MyPokemon />, container)
    })
    expect(container).toMatchSnapshot();
})