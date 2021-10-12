import React from 'react';
import useHooks from '../../../hook';

import './index.css';

const RecipeModal = ({ data, name }) => {
  const { setEntry, goTo } = useHooks();
  const handleClick = (entry) => {
    setEntry(entry);
    goTo(`/recipe/${entry.idMeal}`);
  }
  return <div>
    <div className="category">
      <h2 className="category-title">{name}</h2>
    </div>
    <div className="modal-container">
      {data.length && data.map((item, idx) => (<div className="modal" key={idx} onClick={() => handleClick(item)}>
        <div className="image-container" onClick={() => handleClick(item)}>
          <img src={item.strMealThumb} alt={item.strMeal} onClick={() => handleClick(item)} />
        </div>
        <h2 className="title" onClick={() => handleClick(item)} >{item.strMeal}</h2>
        <p className="content" onClick={() => handleClick(item)} >{item.strInstructions}</p>
      </div>))}
    </div>
  </div>
}

export default RecipeModal;