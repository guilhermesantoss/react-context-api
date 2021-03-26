import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export default function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCount must be used within a CounterProvider");
  }
  const { count, setCount } = context;
  return {
    count,
    setCount,
  };
}
