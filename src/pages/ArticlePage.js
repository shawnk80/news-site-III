import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import ArticlesAPI from '../api/ArticlesAPI';

class ArticlePage extends Component {
  state = {
    article: {}
  }

  // const article = ArticlesAPI.fetchArticleByID(articleID);
  // const image = this.article.image ? this.article.image : null;

  async componentDidMount() {
    try {
      console.log(this.props)
      let articleID = this.props.match.params.articleID;
      const jsonResponse = await ArticlesAPI.fetchArticleByID(articleID);
      this.setState({
        article: jsonResponse
      });
    } catch (error) {
      console.error('Error occurred fetching data: ', error);
    }
  }
  
  render() {

    return (
      <div>
        {this.state.article ? <Article {...this.state.article } /> :
          <span>404: Article Not Found</span>
        }
      </div>
    );
  }
}

export default ArticlePage;


// Functional solution:
// function ArticlePage(props) {
//   const articleIndex = props.match.params.articleID - 1;
//   const article = News[articleIndex];
//   const image = article.multimedia.length ? article.multimedia[2].url : null;

//   return (
//     <div>
//       {article ? <Article { ...article } image={ image } /> :
//         <span>404: Article Not Found</span>
//       }
//     </div>
//   );
// }
