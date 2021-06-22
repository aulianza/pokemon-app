import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link  = new HttpLink({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
