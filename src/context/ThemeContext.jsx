import React from "react";
import { lightTheme, darkTheme } from "../theme/theme";

const ThemeContext = React.createContext();

function Context(props) {
  const [checked, setChecked] = React.useState(false);

  function themeChanger() {
    setChecked(checked.theme === "dark" ? lightTheme : darkTheme);
  }
  return (
    <ThemeContext.Provider value={{ checked, themeChanger }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { Context, ThemeContext };
