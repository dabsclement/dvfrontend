import { css } from "@emotion/css";

function Footer() {
  return (
    <>
      <section className={css(`background: #3E2D1B;`)}>
        <div className="container py-5">
          <div className="row">
            <div className="col col-3">
              <p className="text-light font-weight-bold">Social</p>

              <ul
                className={`p-0 m-0 ${css(
                  `
                  list-style-type: none; 
                  color: "#DCD1BF";
                  `
                )}`}
              >
                <li style={{ color: "#DCD1BF" }}>Adidas</li>
                <li style={{ color: "#DCD1BF" }}>Puma</li>
                <li style={{ color: "#DCD1BF" }}>Rebok</li>
                <li style={{ color: "#DCD1BF" }}>Nike</li>
              </ul>
            </div>

            <div className="col col-3">
              <p className="text-light font-weight-bold">Company</p>

              <ul
                className={`p-0 m-0 ${css(
                  `
                  list-style-type: none; 
                  color: "#DCD1BF";
                  `
                )}`}
              >
                <li style={{ color: "#DCD1BF" }}>Adidas</li>
                <li style={{ color: "#DCD1BF" }}>Puma</li>
                <li style={{ color: "#DCD1BF" }}>Rebok</li>
                <li style={{ color: "#DCD1BF" }}>Nike</li>
              </ul>
            </div>

            <div className="col col-3">
              <p className="text-light font-weight-bold">Help</p>

              <ul
                className={`p-0 m-0 ${css(
                  `
                  list-style-type: none; 
                  color: "#DCD1BF";
                  `
                )}`}
              >
                <li style={{ color: "#DCD1BF" }}>Adidas</li>
                <li style={{ color: "#DCD1BF" }}>Puma</li>
                <li style={{ color: "#DCD1BF" }}>Rebok</li>
                <li style={{ color: "#DCD1BF" }}>Nike</li>
              </ul>
            </div>

            <div className="col col-3">
              <p className="text-light font-weight-bold">Account</p>

              <ul
                className={`p-0 m-0 ${css(
                  `
                  list-style-type: none; 
                  color: "#DCD1BF";
                  `
                )}`}
              >
                <li style={{ color: "#DCD1BF" }}>Adidas</li>
                <li style={{ color: "#DCD1BF" }}>Puma</li>
                <li style={{ color: "#DCD1BF" }}>Rebok</li>
                <li style={{ color: "#DCD1BF" }}>Nike</li>
              </ul>
            </div>
          </div>

          <div className="text-light mt-5">
            <hr />
          </div>

          <div className="row text-secondary text-center">
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              <span>?? 2019 Pixsellz. All rights reserved.</span>
            </div>
            <div className="col-12 col-lg-6">
              <span className="mx-4">info@pixsellz.io</span>
              <span className="mx-4">879-332-9375</span>
              <span>456 Hagenes Gardens Suite 808</span>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
