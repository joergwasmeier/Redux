import Layout from './components/Layout';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './store';

const app = document.getElementById('root');
ReactDOM.render(<Provider store={store}><Layout/></Provider>, app);