import React from "react";
import {render} from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import Node from './containers/Node';

const tree = {
    0: {
        id: 0,
        counter: 0,
        childIds: []
    }
};

const store = createStore(reducer, tree);


const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <Node id={0}/>
    </Provider>,
    rootElement
);
