import { createContext, useEffect, useState } from 'react';

const WheelContext = createContext();

function WheelProvider({ children }) {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      setTranslateY((prev) => {
        return window.scrollY * 0.4;
      });
    };
    window.addEventListener('scroll', handleWheel);

    return () => window.removeEventListener('scroll', handleWheel);
  });

  return <WheelContext.Provider value={{translateY}}>{children}</WheelContext.Provider>;
}

export { WheelContext, WheelProvider };
