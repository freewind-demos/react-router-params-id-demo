"use strict";
import React, {Component} from 'react';
import articles from './articles';
import _ from 'lodash';

function _findArticle(id) {
  return _.find(articles, a => a.id === id)
}

export default class Article extends Component {
  render() {
    const article = _findArticle(this.props.params.id);
    return <div>
      <h1>{article.title}</h1>
    </div>;
  }
}