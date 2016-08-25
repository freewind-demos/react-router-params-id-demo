import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import App from './app.jsx';
import Articles from './articles.jsx';
import Article from './article.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const router = <Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRedirect to="/articles"/>
    <Route path='articles' component={Articles}/>
    <Route path='article/:id' component={Article}/>
  </Route>
</Router>;

ReactDOM.render(
  router,
  document.getElementById('content')
);
