import React, { useEffect, useState } from "react";
import { fetchNews, fetchNextPage } from "../Api/allReq";
import "./home.css";
import { Col, Container, Row } from "react-bootstrap";
import { Activity, Bookmark } from "react-feather";
const Home = () => {
  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState("");

  const getNews = async () => {
    const { data } = await fetchNews();
    setNews(data.results);
    setNextPage(data.nextPage);
  };

  const getNextPage = async (pageId) => {
    const { data } = await fetchNextPage(pageId);
    setNextPage(data.nextPage);
    setNews(data.results);
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log("page is", news);

  return (
    <div>
      <p className="head">Daily News Pulse: Stay Informed Every Day</p>
      <Container>
        <Row>
          {news.length > 0 ? (
            news.map((i, index) => (
              <>
                <Col className="mb-3 mt-3" lg={3} md={4} key={index}>
                  <div class="card">
                    <div class="body">
                      <p className="textTitle">{i.title}</p>
                      <p class="text">
                        {i.description?.length > 100
                          ? i.description.slice(0, 100) + "..."
                          : i.description}{" "}
                      </p>
                      <span class="username">from: {i.creator}</span>
                      <span class="username"> {i.pubDate}</span>
                      <div class="footer">
                        <div>
                          <div>
                            <Bookmark></Bookmark> {i.source_priority}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </>
            ))
          ) : (
            <p>not found</p>
          )}
        </Row>
      </Container>
      <div
        style={{
          textAlign: "end",
          paddingRight: "20px",
          paddingBottom: "20px",
        }}
      >
        <button className="button-31" onClick={() => getNextPage(nextPage)}>
          next page
        </button>
      </div>{" "}
    </div>
  );
};

export default Home;
