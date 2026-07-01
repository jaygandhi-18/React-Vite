import { createContext, useState } from "react";

export const themeContext = createContext({
  bgColorCode: "",
  textColor: "",
  themeMode: "",
  HandleOnClick: () => {},
  dualVal: false,
});

const ThemeProvider = ({ children }) => {
  const [bgColorCode, setBgColorCode] = useState("#565656");
  const [textColor, setTextColor] = useState("white");
  const [themeMode, setThemeMode] = useState("dark");
  const [dualVal, setDualVal] = useState(false);

  const HandleOnClick = () => {
    if (themeMode === "dark") {
      setBgColorCode("#ffffff");
      setTextColor("black");
      setThemeMode("light");
      setDualVal(true);
    } else {
      setBgColorCode("#565656");
      setTextColor("white");
      setThemeMode("dark");
      setDualVal(false);
    }
  };
  return (
    <themeContext.Provider
      value={{ HandleOnClick, bgColorCode, textColor, themeMode, dualVal }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
