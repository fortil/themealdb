import React, { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import Page from './Page';
import './index.css';

const Search = ({ setEntry }) => {
  const [active, setActive] = useState(false);
  const classes = classNames('search', { 'button': !active, 'page': active });
  if (!active) {
    return <div className={classes} onClick={() => setActive(!active)} >
      <FontAwesomeIcon icon={faSearchPlus} size="2x" />
    </div>
  }
  return <div className={classes}>
    <Page hidePage={() => setActive(!active)} setEntry={setEntry} />
  </div>
}

export default Search;