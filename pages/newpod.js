import "../styles/newpod.module.css";
import { AiFillPicture, AiFillCamera } from "react-icons/ai";
import { FaRegEye, FaTimes } from "react-icons/fa";
import { BiSquare, BiBold, BiItalic } from "react-icons/bi";
import { BsCodeSlash, BsBraces } from "react-icons/bs";
import { IoIosQuote } from "react-icons/io";
import { FiLink2 } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import { useState } from "react";

const newPod = () => {
  const [open, setOpen] = useState(false);
  const [sty, setSty] = useState(false);
  const change = () => {
    setOpen((prev) => !prev);
  };

  const on = (e) => {
    setSty(e.target?.id);
  };

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

        <textarea cols="30" placeholder="Description"></textarea>
        <div className="ccancel" onClick={change}>
          {open ? (
            <FaTimes className="icon" />
          ) : (
            <GiHamburgerMenu className="icon" />
          )}
        </div>
        <div className={open ? "active" : "het"}>
          <BiBold
            id="1"
            onClick={on}
            className={sty === "1" ? "cli" : "icon"}
          />
          <BiItalic
            id="2"
            onClick={on}
            className={sty === "2" ? "cli" : "icon"}
          />
          <IoIosQuote
            id="3"
            onClick={on}
            className={sty === "3" ? "cli" : "icon"}
          />
          <FiLink2
            id="4"
            onClick={on}
            className={sty === "4" ? "cli" : "icon"}
          />
          <MdOutlineFormatListBulleted
            onClick={on}
            id="5"
            className={sty === "5" ? "cli" : "icon"}
          />
          <MdOutlineFormatListNumbered
            onClick={on}
            id="6"
            className={sty === "6" ? "cli" : "icon"}
          />
          <AiFillCamera
            id="7"
            onClick={on}
            className={sty === "7" ? "cli" : "icon"}
          />
          <BsCodeSlash
            id="8"
            onClick={on}
            className={sty === "8" ? "cli" : "icon"}
          />
          <BsBraces
            id="9"
            onClick={on}
            className={sty === "9" ? "cli" : "icon"}
          />
        </div>
      </div>
    </div>
  );
};

export default newPod;
