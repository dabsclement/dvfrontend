import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import CustomBtn from "../components/customBtn/customBtn";
import Footer from "../components/footer/footer";
import { css, cx } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import podcasts from "../utilities/podcasts.json";
import mockBlogs from "../utilities/blogs.json";
import { useEffect, useState } from "react";
import LatestPodcastCard from "../components/latestPodcastCard";
import RecommendededPodcastsCard from "../components/recommendedPodcastCard";
import MailBox from "../components/MailBox";
import BlogCard from "../components/blogCard";

export default function Home() {
  const [latestPodcasts, setLatestPodcasts] = useState([]);
  const [recommendededPodcasts, setRecommendedPodcasts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  // set the blogs
  useEffect(() => {
    let blogsCopy = mockBlogs;
    let blogsData = blogsCopy.splice(0, 4);
    setBlogs(blogsData);
  }, []);

  // set the recommended podcasts
  useEffect(() => {
    let podcastCopy = podcasts;
    let recommendedPodcasts = podcastCopy
      .filter((podcast) => podcast.category === "recommended")
      .splice(0, 4);
    setRecommendedPodcasts(recommendedPodcasts);
  }, []);

  // set the latest podcasts
  useEffect(() => {
    let podcastCopy = podcasts;
    let latestPodcasts = podcastCopy
      .filter((podcast) => podcast.category === "latest")
      .splice(0, 2);
    setLatestPodcasts(latestPodcasts);
  }, []);

  return (
    <div
      className={css(`
    background: rgba(220, 209, 191, 0.6); `)}
    >
      <Head>
        <title>Home - Drummersville</title>
      </Head>

      <Navbar />

      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "90vh",
          background: "url('./ryan-holloway-XUXx8X4znHU-unsplash 1.png')",
        }}
      >
        <div
          style={{
            minHeight: "90vh",
            background: "rgba(62, 45, 27, 0.8)",
          }}
        >
          <div class="container h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="column">
                <div className="row justify-content-center">
                  <div className="col text-center col-12 col-md-8">
                    <h1
                      className="mb-5"
                      className={css`
                        font-family: Begum Sans;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 95px;
                        line-height: 142.5px;
                        color: #dcd1bf;
                      `}
                    >
                      Drummersville Podcast
                    </h1>
                    <p
                      className={`mb-5 ${css(`
                      font-family: Halyard Micro;
                      font-style: normal;
                      font-weight: 400;
                      font-size: 25px;
                      line-height: 45px;
                      color: #ad9f82;
                    `)}`}
                    >
                      Bringing to you inspiring, educating, motivating and
                      transforming interviews from pro drummers and other music
                      professionals.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col col-auto">
                    <div>
                      <button
                        className={`btn py-3  px-4 btn-danger ${css(
                          `border-radius: 50px`
                        )}`}
                      >
                        <FontAwesomeIcon
                          icon={faPlay}
                          color="white"
                          className="mr-2"
                        />
                        Play latest Podcast
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className={css(`
      background: radial-gradient(100% 11900.82% at 100% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
      backdrop-filter: blur(42px);
      `)}
      >
        <div className="container py-4">
          <div className="row">
            <div
              className="col col-6 text-center font-weight-bold"
              style={{
                fontSize: "25px",
                color: "#84382B",
              }}
            >
              <p>Boxen On</p>
            </div>

            <div className="col col-6">
              <div class="row">
                <div class="col col-auto">
                  <Image src="./apple_music.png" />
                </div>
                <div class="col col-auto">
                  <Image src="./spotify.png" />
                </div>

                <div class="col col-auto">
                  <Image src="./gpodcasts.png" />
                </div>

                <div class="col col-auto">
                  <Image src="./sticher.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* latest podcasts */}
      <section>
        <div className="container py-5">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div>
                <p
                  className={`m-0 text-uppercase ${css(`
                      font-size: 25px;
                      color: #84382B;
                    `)}`}
                >
                  Latest Podcasts
                </p>
              </div>

              <div
                className={css(`
                  width: 40px;
                  height: 1px;
                  background: #000000;
                  margin: 0 20px;
              `)}
              ></div>

              <div>
                <button className="btn">view all podcast</button>
              </div>
            </div>

            <div className="d-flex">
              <button
                className={`btn ${css(`
                  width: 50px; 
                  border-radius: 50%;
                  height: 50px; 
                  background: radial-gradient(168% 168% at -24% 50%, #84382B 0%, rgba(132, 56, 43, 0.8) 100%);
                  margin-right: 10px;
                  color: #ffffff;
                  `)}`}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <button
                className={`btn ${css(`
                  width: 50px; 
                  border-radius: 50%;
                  height: 50px; 
                  background: radial-gradient(168% 168% at -24% 50%, #84382B 0%, rgba(132, 56, 43, 0.8) 100%);
                  margin-right: 10px;
                  color: #ffffff;
                  `)}`}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <div className="row mt-4">
            {latestPodcasts.map((podcast) => (
              <div className="col col-6">
                <LatestPodcastCard podcast={podcast} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* recommended podcasts */}
      <section>
        <div className="container py-5">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div>
                <p
                  className={`m-0 text-uppercase ${css(`
                      font-size: 25px;
                      color: #84382B;
                    `)}`}
                >
                  Recommend for you
                </p>
              </div>

              <div
                className={css(`
                  width: 40px;
                  height: 1px;
                  background: #000000;
                  margin: 0 20px;
              `)}
              ></div>

              <div>
                <button className="btn">view all podcast</button>
              </div>
            </div>

            <div className="d-flex">
              <button
                className={`btn ${css(`
                  width: 50px; 
                  border-radius: 50%;
                  height: 50px; 
                  background: radial-gradient(168% 168% at -24% 50%, #84382B 0%, rgba(132, 56, 43, 0.8) 100%);
                  margin-right: 10px;
                  color: #ffffff;
                  `)}`}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <button
                className={`btn ${css(`
                  width: 50px; 
                  border-radius: 50%;
                  height: 50px; 
                  background: radial-gradient(168% 168% at -24% 50%, #84382B 0%, rgba(132, 56, 43, 0.8) 100%);
                  margin-right: 10px;
                  color: #ffffff;
                  `)}`}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <div className="row mt-4">
            {recommendededPodcasts.map((podcast) => (
              <div className="col col-6">
                <RecommendededPodcastsCard podcast={podcast} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* blogs */}
      <section>
        <div className="container py-5">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div>
                <p
                  className={`m-0 text-uppercase ${css(`
                      font-size: 25px;
                      color: #84382B;
                    `)}`}
                >
                  Blogs
                </p>
              </div>

              <div
                className={css(`
                  width: 40px;
                  height: 1px;
                  background: #000000;
                  margin: 0 20px;
              `)}
              ></div>

              <div>
                <button className="btn">view all blogs</button>
              </div>
            </div>

            <div className="d-flex">
              <button
                className={`btn ${css(`
                  width: 50px; 
                  border-radius: 50%;
                  height: 50px; 
                  background: radial-gradient(168% 168% at -24% 50%, #84382B 0%, rgba(132, 56, 43, 0.8) 100%);
                  margin-right: 10px;
                  color: #ffffff;
                  `)}`}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <button
                className={`btn ${css(`
                  width: 50px; 
                  border-radius: 50%;
                  height: 50px; 
                  background: radial-gradient(168% 168% at -24% 50%, #84382B 0%, rgba(132, 56, 43, 0.8) 100%);
                  margin-right: 10px;
                  color: #ffffff;
                  `)}`}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <div className="row mt-4">
            {blogs.map((blog) => (
              <div className="col col-6">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="my-5">
        <MailBox />
      </div>

      <Footer />
    </div>
  );
}
