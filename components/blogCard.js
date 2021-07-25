import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";

function BlogCard({ data }) {
  const { image, title, subtitle, author, comments, date } = data;
  return (
    <figure
      className={`m-0 mt-3 ${css(`
              background: radial-gradient(100% 58.13% at 100% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
            `)}`}
    >
      <Image className="img-fluid w-100" src="./podcast1.png" />

      <div
        className={`d-flex justify-content-between mt-3 ${css(`
          font-family: Halyard Micro;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 27px;
          color: #3E2D1B;
        `)}`}
      >
        <p>{author}</p>
        <p className="text-capitalized">
          {comments} Comments / {date}
        </p>
      </div>

      <blockquote
        className={`m-0 mt-1 text-uppercase ${css(`
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

      <button className="btn btn-danger p-3 text-uppercase mt-3">
        read more
      </button>
    </figure>
  );
}

export default BlogCard;
