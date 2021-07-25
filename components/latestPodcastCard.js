import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";

function LatestPodcastCard({ data }) {
  const { image, title, subtitle } = data;

  return (
    <figure style={{ position: "relative" }}>
      <Image className="img-fluid w-100" src={image} alt={title} />

      <button
        className={`btn ${css(`
          width: 50px; 
          border-radius: 50%;
          height: 50px; 
          background: radial-gradient(168% 168% at -24% 50%, #84382B 0%, rgba(132, 56, 43, 0.8) 100%);
          margin-right: 10px;
          color: #ffffff;
          position: absolute;
          right:0;
          top: 480px;
          `)}`}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>

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
    </figure>
  );
}

export default LatestPodcastCard;
