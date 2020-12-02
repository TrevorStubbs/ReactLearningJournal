import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPat] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPat(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, []);

  return currentPath === path ? children : null;
};

export default Route;