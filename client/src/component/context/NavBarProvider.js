import { createContext, useEffect, useRef, useState } from 'react';

const NavBarContext = createContext();

function NavBarProvider({ children }) {
  const [showNavbar, setShowNavbar] = useState(false);

  const refHome = useRef();
  const [large, setlarge] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (refHome.current) {
        const rect = refHome.current.getBoundingClientRect();
        setlarge(rect.top === 0);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavBarContext.Provider value={{ refHome, large, showNavbar, setShowNavbar }}>{children}</NavBarContext.Provider>
  );
}

export { NavBarContext, NavBarProvider };
