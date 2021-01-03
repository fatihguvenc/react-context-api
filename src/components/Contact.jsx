import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Contact() {
  const contextSlide = React.useContext(ThemeContext);
  const { bgColor, textColor } = contextSlide.checked;

  return (
    <div className="col-sm-4">
      <div className={[bgColor, textColor, "mb-5"].join(" ")}>
        <div className="card-body">
          <h5 className={`card-title ${textColor}`}>Contact</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className={`card-text ${textColor}`}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
