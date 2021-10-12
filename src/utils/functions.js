export const groupBy = (xs, key) => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const generateIngredients = (item) => {
  const ingredients = [];
  for (const k in item) {
    if (k.includes('strIngredient') && !!item[k]) {
      const num = k.match(/\d+$/)[0];
      ingredients.push(`${item[`strMeasure${num}`]} ${item[k]}`);
    }
  }
  return ingredients;
}