import React, { useEffect, useState } from "react";
import { fetchNews, fetchNextPage } from "../Api/allReq";

const Home = () => {
  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState("");

  const getNews = async () => {
    const { data } = await fetchNews();
    setNews(data.results);
    setNextPage(data.nextPage)
  };

  const getNextPage = async (pageId) => {
    const { data } = await fetchNextPage(pageId);
    setNextPage(data.nextPage)
    setNews(data.results);
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log("page is",news);

  return (
    <div>
      <button onClick={() => getNextPage(nextPage)}>next page</button>
    </div>
  );
};

export default Home;
