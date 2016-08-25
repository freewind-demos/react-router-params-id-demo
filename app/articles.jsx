import React, {Component} from 'react';
import {Link} from 'react-router';
import articles from './articles';

export default class Articles extends Component {

  render() {
    console.log(articles);

    return <div>
      <h1>Articles</h1>
      <div>
        {
          articles.map(article =>
            <div key={article.id}>
              <div><Link to={"/article/" + article.id}>{article.title}</Link></div>
            </div>
          )
        }
      </div>
    </div>;
  }
}