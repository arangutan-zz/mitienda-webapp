import React from 'react';
import { render } from 'react-dom';
import configStore from './store/configStore'
import {Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import routes from './routes';
import { loadEvents } from './store/actions/events'

const store = configStore();

store.dispatch(loadEvents());


render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app'),
);
