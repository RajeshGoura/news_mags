import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=9c0e2217ca60409a9eb537b8ee2f9fbd`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          console.error('Articles data is undefined');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Handle errors gracefully, display an error message or retry fetching data
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {/* Conditionally render the articles only when it's not empty */}
      {articles && articles.length > 0 &&
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
    </div>
  );
};

export default NewsBoard;
