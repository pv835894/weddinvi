import React from "react";
import "./StickySideBar.css";

const StickySideBar = (props) => {
  return (
    <div className="sticky-side-bar-speicific">
      <a
        href={`https://wa.me/${props.whatsapp}?text=Hey! Weddinvi, I have a Query`}
        className="whatsapp-icon"
        target="_blank"
        type="button"
        rel="noreferrer"
      >
        <i className="fa fa-whatsapp" /> &nbsp;&nbsp; Ask Me
      </a>
    </div>
  );
};

export default StickySideBar;
