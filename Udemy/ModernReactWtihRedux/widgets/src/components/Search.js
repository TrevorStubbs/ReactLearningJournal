import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { queryAllByAltText } from '@testing-library/react';

const Search = () => {
  const [term, setTerm] = useState('Programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // ================== Debouncing logic ========================
  useEffect(() => {
    const timerId = setTimeout(() =>{
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });

      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);
  // ===============================================================  

  // =================== original logic =========================
  // useEffect(() => {
  //   // Fix 1
  //   const search = async () => {
  //     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term
  //       }
  //     });

  //     setResults(data.query.search);
  //   };

  //   if(term && !results.length){
  //     search();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 500);
      
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }


  //   // Fix 2
  //   // (async () => {
  //   //   await axios.get(';lkj');
  //   // })();

  //   // Fix 3
  //   // axios.get(';lkj').then((response) => {
  //   //   console.log(response.data);
  //   // });


  // }, [term, results.length]);

  // ======================================================================

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go</a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;