import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import useHooks from '../../hook';
import { functions as fn, CONSTANTS } from '../../utils';

import './index.css';

const Recipe = () => {
  const [like, doLike] = useState(false);
  const { entry, goTo, setEntry } = useHooks();
  const { recipeId } = useParams();
  useEffect(() => {
    if (!entry || entry.idMeal !== recipeId) {
      const source = axios.CancelToken.source();
      async function lookingFor() {
        try {
          const { data: { meals } } = await axios.get(`${CONSTANTS.API_URL}/lookup.php?i=${recipeId}`, { cancelToken: source.token });

          setEntry(meals[0]);

        } catch (err) {
          if (axios.isCancel(err)) {
            console.log('Cancelled');
          } else {
            console.error(err);
          }
        }
      }
      lookingFor();

      return () => {
        source.cancel('Cleaning up');
      }
    }
  }, []);
  if (!entry || entry.idMeal !== recipeId) {
    return <div>Loading...</div>
  }

  return <div className="page">
    <div className="page-header">
      <FontAwesomeIcon icon={faArrowLeft} size={"2x"} onClick={() => goTo('/')} />
      <FontAwesomeIcon icon={!like ? faHeart : faHeartbeat} size={"2x"} onClick={() => doLike(!like)} />
    </div>
    <div className="page-modal">
      <div className="page-image-container">
        <img src={entry.strMealThumb} alt={entry.strMeal} />
      </div>
      <h2 className="page-title" >{entry.strMeal}</h2>
      <ul className="page-content" >{fn.generateIngredients(entry).map((ingredient, idx) => (<li key={idx}>{ingredient}</li>))}</ul>
      <h2 className="page-title" >Directions</h2>
      <p className="page-content" >{entry.strInstructions}</p>
    </div>
  </div>
}

export default Recipe;