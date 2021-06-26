import "./customBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function CustomBtn() {
  return (
    <>
      <div className="btnsContainer">
        <div className="btn1"></div>
        <div className="btn2"></div>
        <div className="btn3 btn text-capitalize"></div>
        <div className="text">
          <FontAwesomeIcon icon={faCoffee} color="white" />
            <span className="ml-3 text-capitalize">play latest podcast</span>
        </div>
      </div>
    </>
  );
}

export default CustomBtn;
