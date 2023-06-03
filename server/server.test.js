const details = require('./models/product_details.js');
const products = require('./models/products.js');
const related = require('./models/related_products.js');
const styles = require('./models/styles.js');

test('retrieve product details', () => {
  const product = details(1);
  expect(product.decription).toBe("The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.")
  expect(product.features.length).toBe(2);
  expect(product.category).toBe("Jackets");
});

test('retrieve products', () => {
  const products1 = products();
  expect(products1.length).toBe(5);
  const products2 = products(1000, 3);
  expect(products2.length).toBe(3);
  const products2again = products(1000, 3);
  expect(products2[2].id === product2again[2].id).toBe(true);
});

test('retrieve related products', () => {
  const related_prods = related(5555);
  expect(related_prods.length).toBe(4);
  expect(related_prods.includes(2758)).toBe(true);
  expect(related_prods.includes(4507)).toBe(true);
  expect(related_prods.includes(2093)).toBe(true);
  expect(related_prods.includes(5063)).toBe(true);
})

test('retrieve styles', () => {
  const style = styles(22222);
  expect(style.product_id).toBe(22222);
  expect(style.results.length).toBe(1);
  expect(style.results[0].name).toBe(Azure);
})
