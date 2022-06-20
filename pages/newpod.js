import "../styles/newpod.module.css";
import { AiFillPicture } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { BiSquare } from "react-icons/bi";

const newPod = () => {
  return (
    <div className="main">
      <div className="top">
        <label> Logo</label>
        <button>Preview</button>
      </div>
      <div className="mid">
        <div className="check">
          <button>
            <FaRegEye />
            Preview
          </button>
          <button>
            <AiFillPicture />
            Set Cover
          </button>
          <button>
            <BiSquare />
            Feature
          </button>
        </div>
        <div className="log">
          <input type="text" placeholder="Enter Tag" />
        </div>
      </div>
      <div className="content">
        <input type="text" placeholder="Title..." />

        <textarea cols="30" rows="10">
          Description
        </textarea>
        <div className="modal">
          
        </div>
      </div>
    </div>
  );
};

export default newPod;
