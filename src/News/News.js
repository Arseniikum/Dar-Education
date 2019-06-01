import React from "react";

import { Link } from "react-router-dom";
import { getNews } from "../services/news";
import { dateFormat } from "../services/utils";
import "./News.scss";

function News(props) {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    getNews().then(response => {
      setNews(response);
    });
  }, []);

  return (
    <>
      <div className="row news-list">
        {news.map((post, index) => (
           <a href= {`${post.link}`} key={`post-${index}`}>
          <a className="col-12 col-xl-4 col-md-6 card">
            <img className="card-img" src={post.imageUrl}/>
            <div className="news_list__post1">
              <div>
                <b className="news_list__post1-b">{post.title}</b>
                <p className="news_list__post1-p">
                  {dateFormat(post.publishedAt)}{" "}
                  {post.author ? `/ Автор: ${post.author}` : ""}
                </p>
                <p className="news_list__post1-p2">{post.subtitle}</p>
              </div>
              <div>
                <p className="news_list__post1-p3-exeption">
                  Перейти к статье &gt;{" "}
                </p>
              </div>
            </div>
          </a>
          </a>
        ))}
      </div>
    </>
  );
}

export default News;
