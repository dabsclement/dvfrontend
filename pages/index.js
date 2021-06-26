import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import CustomBtn from "../components/customBtn/customBtn";
import Footer from "../components/footer/footer";
import { css, cx } from "@emotion/css";

export default function Home() {
  return (
    <div className="" className={css`
    // background: url("bgrnd.png")
    `}>
      <Head>
        <title>Home - Drummersville</title>
      </Head>

      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div class="container">
          <div className="row justify-content-center align-items-center h-100">
            <div className="column">
              <div className="row justify-content-center">
                <div className="col text-center col-12 col-md-8 col-lg-6">
                  <h1
                    className="mb-5"
                    className={css`
                    font-family: Begum Sans;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 70px;
                    line-height: 100px;
                    `}
                  >
                    Start your podcast today!
                  </h1>
                  <p>
                    This is a procast website that helps you to create and
                    manage your audio procast without any stress and no knowlege
                    is required.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col col-auto">
                  <div>
                    <CustomBtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
