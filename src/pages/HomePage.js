import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from "../api/ArticlesAPI"

class HomePage extends Component {

  state = {
    articles: []
  }

  async componentDidMount() {
    try {
      const jsonResponse = await ArticlesAPI.fetchArticles()
      this.setState({
        articles: jsonResponse
      });
    } catch (error) {
      console.error('Error occurred fetching data: ', error);
    }
  }


  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles}
          handleTitleClick={(articleID) => this.props.history.push(`/articles/${articleID}`) } />
      </div>
    );
  }
}

export default HomePage;


// Functional solution:
// function HomePage() {
//   return (
//     <div>
//       <ArticleList articles={News}
//         handleTitleClick={(articleID) => props.history.push(`/articles/${articleID}`)} />
//     </div>
//   );
// }
