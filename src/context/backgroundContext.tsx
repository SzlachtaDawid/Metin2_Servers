import React from "react";

type ContextValue = {
  wrapper: HTMLDivElement | null;
  changeBackground: (className: string) => void;
};

const BackgroundContext = React.createContext<ContextValue>({
  wrapper: null,
  changeBackground: () => {},
});
BackgroundContext.displayName = "BackgroundContext";
export default BackgroundContext;
