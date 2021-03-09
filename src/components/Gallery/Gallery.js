import "./Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Gallery(props) {
  const name = props.name;
  const view = props.view;
  return (
    <div className="gallerycontainer">
      <div className="arrow">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="user"> {view === "host" ? name : "Host"}</div>
      <div className="user"> {view === "host" ? "Student" : name}</div>
      <div className="user">Student</div>
      <div className="user">Student</div>
      <div className="user">Student</div>
      <div className="arrow bottomArrow">
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
  );
}

export default Gallery;
