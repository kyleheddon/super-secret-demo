import React from 'react';
import Home from './Home';
import rawItems from './data/items.json';
import { camelCaseKeys } from './util';
import './App.scss';

const items = rawItems.map((item, i) => ({
    ...camelCaseKeys(item),
    // give each item a unique id
    id: i + 1
}));

const App = () =>
    <Home
        items={items}
    />

export default App;
