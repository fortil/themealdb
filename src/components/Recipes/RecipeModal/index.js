import React from 'react';
import './index.css';

const RecipeModal = ({ data, name, setEntry }) => {
  return <>
    <div className="category">
      <h2 className="category-title">{name}</h2>
    </div>
    {data.length && data.map(({ strInstructions, strMealThumb, strMeal, ...rest }, idx) => (<div className="modal" key={idx} onClick={() => setEntry({ strInstructions, strMealThumb, strMeal, ...rest })}>
      <div className="image-container" onClick={() => setEntry({ strInstructions, strMealThumb, strMeal, ...rest })}>
        <img src={strMealThumb} alt={strMeal} onClick={() => setEntry({ strInstructions, strMealThumb, strMeal, ...rest })} />
      </div>
      <h2 className="title" onClick={() => setEntry({ strInstructions, strMealThumb, strMeal, ...rest })} >{strMeal}</h2>
      <p className="content" onClick={() => setEntry({ strInstructions, strMealThumb, strMeal, ...rest })} >{strInstructions}</p>
    </div>))}
  </>
}

export default RecipeModal;