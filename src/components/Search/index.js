import React, { } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Search = ({ active, setActive }) => {
  const classes = classNames('search', { 'search-button': !active, 'search-page': active });
  if (!active) {
    return <div className={classes} onClick={() => setActive(!active)} >
      <FontAwesomeIcon icon={faSearchPlus} size="2x" />
    </div>
  }
  return <div className={classes}>Hola</div>
}

export default Search;