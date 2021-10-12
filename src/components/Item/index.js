import React, { } from 'react';
import './index.css';

const Recipe = ({ strInstructions, strMealThumb, strMeal, onClick, ...rest }) => {
  const props = {};
  if (onClick) {
    props.onClick = onClick;
  }
  return <div className="modal" {...props}>
    <div className="image-container" {...props}>
      <img src={strMealThumb} alt={strMeal}  {...props} />
    </div>
    <h2 className="title" {...props} >{strMeal}</h2>
    <p className="content" {...props} >{strInstructions}</p>
  </div>
}

export default Recipe;