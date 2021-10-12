import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { CONSTANTS } from '../../../utils/';
import './index.css';

const Page = ({ setEntry, hidePage }) => {
  const [{ text, entries }, setState] = useState({ text: '', entries: [] });
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const delayDebounceFn = setTimeout(() => {
      async function lookingFor() {
        try {
          const { data: { meals } } = await axios.get(`${CONSTANTS.API_URL}/search.php?s=${text}`, { cancelToken: source.token });

          setState({ text, entries: meals || [] });

        } catch (err) {
          if (axios.isCancel(err)) {
            console.log('Cancelled');
          } else {
            console.error(err);
          }
        }
      }
      if (text.length > 2) {
        lookingFor();
      }
    }, 500);

    return () => {
      clearTimeout(delayDebounceFn);
      source.cancel('Cleaning up');
    }

  }, [text]);

  return <div className="search-bar">
    <div className="header">
      <FontAwesomeIcon icon={faArrowLeft} size={"2x"} onClick={() => hidePage()} />
      <input type="text" ref={inputEl} autoFocus value={text} onChange={({ target }) => setState({ entries, text: target.value })} />
    </div>
    <div className="list">
      <ul>
        {(entries.length && entries.map(({ strMeal, ...rest }, idx) => <li key={idx} onClick={() => setEntry({ strMeal, ...rest })}>{strMeal}</li>)) || 'No Results'}
      </ul>
    </div>
  </div>
}

export default Page;