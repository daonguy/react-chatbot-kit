import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
// import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import ChatApp from '../containers/Chat';

/* const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
  ),
); */
const store = applyMiddleware(ReduxPromise)(createStore);

const Root = () => {
  return (
    <Provider store={store(reducers)}>
      <Router>
        <Switch>
          <Route path="/" component={ChatApp} exact />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;

