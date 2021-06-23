import PokemonList from '../PokemonList';
import { BrowserRouter as Router } from "react-router-dom";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import { MockedProvider } from '@apollo/client/testing';
import { mocksPokemonList } from '../../graphql/mocks/mocksPokemonList';

const data = mocksPokemonList;
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

it("pokemon-list, snapshot", () => {
    act(() => {
        render(
            <MockedProvider mock={data}>
                <Router>
                    <PokemonList />
                </Router>
            </MockedProvider>
        ,container)
    })
    expect(container).toMatchSnapshot();
})