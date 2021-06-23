import PokemonDetail from '../PokemonDetail';
import { BrowserRouter as Router } from "react-router-dom";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import { MockedProvider } from '@apollo/client/testing';
import { mocksPokemonDetail } from '../../graphql/mocks/mockPokemonDetail';

const data = mocksPokemonDetail;
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

it("pokemon-detail, snapshot", () => {
    act(() => {
        render(
            <MockedProvider mock={data}>
                <Router>
                    <PokemonDetail />
                </Router>
            </MockedProvider>
        ,container)
    })
    expect(container).toMatchSnapshot();
})