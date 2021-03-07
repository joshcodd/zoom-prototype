import "./Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  return (
    <div className="gallerycontainer">
      <div className="topArrow">
        <FontAwesomeIcon icon={faChevronDown} className="" color="#a8a8a8" />
      </div>
      <div className="user" />
      <div className="user" />
      <div className="user" />
      <div className="user" />
      <div className="bottomArrow">
        <FontAwesomeIcon icon={faChevronUp} className="" color="#a8a8a8" />
      </div>
    </div>
  );
}

export default Gallery;
