import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { queryAllByAltText } from '@testing-library/react';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fix 1
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });

      setResults(data.query.search);
    };

    if (term) {
      search();
    }

    // Fix 2
    // (async () => {
    //   await axios.get(';lkj');
    // })();

    // Fix 3
    // axios.get(';lkj').then((response) => {
    //   console.log(response.data);
    // });


  }, [term]);

  const renderedResults = results.map((result) => {
    return(
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          {result.snippet}
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