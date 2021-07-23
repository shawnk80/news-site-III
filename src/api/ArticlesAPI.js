const ARTICLE_URL = "http://localhost:3001/api/articles/"

const fetchArticleByID = async (articleID) => {
  let response = await fetch(ARTICLE_URL +`${articleID}`);
  let json = await response.json();
  return json;
};

const fetchArticlesBySection = (section) => {
};

const fetchArticles = async (filters = null) => {
  let response = await fetch(ARTICLE_URL);
  let json = await response.json();
  return json;
};

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection
};
