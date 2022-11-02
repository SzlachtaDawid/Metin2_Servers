import React from "react";

const BackgroundContext = React.createContext({
  wrapper: null,
  changeBackground: () => {},
});
BackgroundContext.displayName = "BackgroundContext";
export default BackgroundContext;
