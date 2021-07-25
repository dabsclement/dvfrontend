import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import PodcastCard from "../components/podcastCard";
import WhereToListen from "../components/whereToListen";
import mockPodcasts from "../utilities/podcasts.json";

function Podcast() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    setPodcasts(mockPodcasts);
  }, []);
  return (
    <>
      <Head>
        <title>Podcast - Drummersville</title>
      </Head>

      <Navbar />

      <div
        className="text-uppercase py-4"
        style={{
          color: "#84382B",
          background: "#DCD1BF",
          fontSize: "25px",
          fontFamily: "Begum Sans",
        }}
      >
        <div className="container">Podcasts</div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-between py-4">
          <div>
            <label className="mx-3">category</label>
            <select>
              <option>pop</option>
              <option>jazz</option>
            </select>
          </div>

          <div>
            <div
              className="rounded fw-bold"
              style={{ border: "1px solid #84382B", color: "#84382B" }}
            >
              <button
                className="btn text-light"
                style={{ backgroundColor: "#84382B" }}
              >
                Featured
              </button>
              <button
                className="btn"
                style={{ borderRight: "1px solid #84382B" }}
              >
                New
              </button>
              <button className="btn">On sale</button>
            </div>
          </div>
        </div>
      </div>

      <WhereToListen />

      <section>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            {podcasts.map((data) => (
              <div className="col mb-3 mb-md-0 mt-4 col-12 col-md-6 col-xl-5">
                <PodcastCard data={data} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5">
          <div className="row mt-5 justify-content-center">
            <div className="col-auto">
              <button className="btn btn-danger p-3 text-uppercase mt-3 ">
                Load more podcasts
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Podcast;
