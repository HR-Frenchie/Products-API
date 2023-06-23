const details = require('../models/product_details.js');
const products = require('../models/products.js');
const related = require('../models/related_products.js');
const styles = require('../models/styles.js');

test('retrieve product details', () => {
  return details(1)
  .then(product => {
    expect(product.description).toBe("The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.");
    expect(product.features.length).toBe(2);
    expect(product.category).toBe("Jackets");
  })
});

test('retrieve 5 products', () => {
  return products()
  .then(productArr => expect(productArr.length).toBe(5));
});

test('retrieve 3 products', () => {
  return products(1000, 3)
  .then(productArr => {
    expect(productArr.length).toBe(3);
    expect(productArr[2]["product_id"]).toBe(3000);
  });
});

test('retrieve related products', () => {
  return related(5555)
  .then(related_prods => {
    expect(related_prods.length).toBe(4);
    expect(related_prods.includes(2758)).toBe(true);
    expect(related_prods.includes(4507)).toBe(true);
    expect(related_prods.includes(2093)).toBe(true);
    expect(related_prods.includes(5063)).toBe(true);
  });
});

test('retrieve styles', () => {
  return styles(22222)
  .then(style => {
    expect(style.product_id).toBe(22222);
    expect(style.results.length).toBe(1);
    expect(style.results[0].name).toBe('Azure');
  });
});
