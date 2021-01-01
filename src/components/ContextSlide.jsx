import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function ContextSlide(props) {
  const condextSlide = React.useContext(ThemeContext);
  const { themeChanger } = condextSlide;

  return (
    <div className="form-check form-switch my-5 mr-auto ml-auto">
              <input
                onChange={themeChanger}
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
            </div>
  );
}

export default ContextSlide;
