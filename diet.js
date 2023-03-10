const foods = [['flour', 'water'],
  ['potato', 'water', 'cream', 'flour', 'butter', 'salt', 'pepper'],
  ['chicken', 'oil', 'parsley', 'lemon', 'distilled vinegar', 'bay leaf',
    'salt', 'black pepper', 'clove', 'green onion', 'flour', 'white wine', 'egg yolk'],
  ['beef', 'salt', 'pepper', 'flour', 'lard', 'oil', 'butter', 'cream'],
  ['buttermilk', 'egg', 'flour', 'baking soda', 'butter'],
  ['pork grease', 'beef', 'flour', 'vinegar', 'salt', 'pepper'],
  ['cornmeal', 'salt', 'water'],
  ['pork', 'rice', 'sugar', 'flour', 'pepper'],
  ['flour', 'salt', 'pepper', 'water',
    'beef', 'egg', 'onion', 'potato', 'pork', 'dehydrated vegetable'],
  ['beef', 'salt', 'pepper'],
  ['egg', 'salt', 'nutmeg', 'butter', 'cream', 'bread'],
  ['breadcrumb', 'cheese', 'water'],
  ['fish', 'cayenne pepper', 'black pepper', 'salt', 'rosemary', 'thyme'],
  ['fish', 'cornmeal', 'salt', 'black pepper', 'cayenne pepper', 'bacon'],
  ['flour', 'salt', 'pepper', 'fish', 'oil', 'parsley', 'onion']];

// eslint-disable-next-line no-unused-vars
const kittyLikes = ['fish', 'beef', 'pork', 'chicken'];
// eslint-disable-next-line no-unused-vars
const kittyDislikes = ['cayenne pepper', 'chicken'];

// eslint-disable-next-line no-unused-vars,no-shadow
const whatCatWillEat = (foodstuffs, likes, dislikes) => {
  // eslint-disable-next-line no-undef,no-unused-vars,implicit-arrow-linebreak
  const foodsWithLikes = _.filter(foodstuffs, food => _.intersection(food, likes).length > 0);
  // eslint-disable-next-line no-unused-vars,eqeqeq
  const foodWithLikesAndNoDislikes = _.filter(foodsWithLikes, food => _.intersection(food, dislikes).length == 0);
  return foodWithLikesAndNoDislikes;
};

// eslint-disable-next-line no-undef
console.log(whatCatWillEat(foods, kittyLikes, kittyDislikes));
