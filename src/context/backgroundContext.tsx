import React from "react";

type ContextValue = {
  wrapper: HTMLDivElement | any;
  changeBackground: (className: string) => void;
};

const BackgroundContext = React.createContext<ContextValue | null>({
  wrapper: null,
  changeBackground: () => {},
});
BackgroundContext.displayName = "BackgroundContext";
export default BackgroundContext;
