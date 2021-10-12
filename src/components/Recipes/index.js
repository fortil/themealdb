import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from './Title';
import Recipe from '../Item';
import RecipeModal from './RecipeModal';
import Entries from '../../mocks/entries';
import { CONSTANTS, functions as fn } from '../../utils/';
import './index.css';

const Recipes = ({ showEntriesFirst = 5, setEntry }) => {
  const [{ entries, ids }, setEntries] = useState({ entries: Entries, ids: [] });

  useEffect(() => {
    // eslint-disable-next-line
    async function fetchData() {
      const nEntries = [...entries];
      while (nEntries.length < showEntriesFirst) {
        const { data: { meals } } = await axios.get(`${CONSTANTS.API_URL}/random.php`);
        if (!ids.includes(meals[0].idMeal)) {
          nEntries.push(meals[0]);
        }
      }
      setEntries({ entries: nEntries, ids: nEntries.map(({ idMeal }) => idMeal) });
    }
    // fetchData();
  }, []);

  const byCategory = fn.groupBy(entries, 'strCategory');

  return <div className={'recipes'}>
    <Title />
    <div className={'items'}>
      {entries.length && Object.keys(byCategory).map((name, idx) => <RecipeModal key={idx} name={name} data={byCategory[name]} setEntry={setEntry} />)}
    </div>
  </div>
}

export default Recipes;