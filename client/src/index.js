import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Auth0Provider } from './react-auth0-spa';
import { REACT_APP_AUDIENCE, REACT_APP_DOMAIN, REACT_APP_CLIENTID, REACT_APP_CALLBACKURL } from './utils/auth_config';
import history from './utils/history'
import 'bootstrap/dist/css/bootstrap.min.css'

const onRedirectCallback = appState => {
    history.push(appState && appState.targetURL ? appState.targetURL : window.location.pathname)
}

ReactDOM.render(
    <Auth0Provider
        domain={REACT_APP_DOMAIN}
        client_id={REACT_APP_CLIENTID}
        redirect_uri={REACT_APP_CALLBACKURL}
        onRedirectCallback={onRedirectCallback}
        audience={REACT_APP_AUDIENCE}
    >
        <App />
    </Auth0Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
