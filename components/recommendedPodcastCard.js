import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";

function RecommendededPodcastsCard({ podcast }) {
  const { image, title, subtitle, caption, author } = podcast;
  return (
    <figure
      className={`m-0 mt-3 ${css(`
              background: radial-gradient(100% 58.13% at 100% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
            `)}`}
    >
      <Image className="img-fluid" src={image} alt={title} />
      <blockquote
        className={`m-0 mt-3 text-uppercase ${css(`
              font-size: 25px;
              font-family: Begum Sans;
              color: #84382B;
            `)}`}
      >
        {title}
      </blockquote>
      <figcaption
        className={`${css(`
            font-family: Halyard Micro;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 32px;
            color: #3E2D1B;
        `)}`}
      >
        {subtitle}
      </figcaption>

      <div className="d-flex mt-4">
        <button
          className={`btn ${css(`
          width: 50px; 
          border-radius: 50%;
          height: 50px; 
          background: #ffffff;
          margin-right: 15px;
          color: #000000;
          `)}`}
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>

        <div>
          <p
            className={`mb-1 font-weight-bold ${css(`
                color: #84382B;
          `)}`}
          >
            {caption}
          </p>
          <p>By {author}</p>
        </div>
      </div>
    </figure>
  );
}

export default RecommendededPodcastsCard;
