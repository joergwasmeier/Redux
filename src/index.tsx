import Layout from './components/Layout';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './store';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

const app = document.getElementById('root');
export const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} >
            <Layout/>
        </ConnectedRouter>
    </Provider>, app);