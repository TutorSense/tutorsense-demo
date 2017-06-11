import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import NotFound from './NotFound';

const Root = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ App } />
                <Route component={ NotFound } />
            </Switch>
        </BrowserRouter>
    )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
