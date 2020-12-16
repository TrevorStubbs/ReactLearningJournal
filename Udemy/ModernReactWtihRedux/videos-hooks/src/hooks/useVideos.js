import { useState, useEffect } from 'react';
// dont need React since there is no JSX
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;