const details = require('../models/product_details.js');
const products = require('../models/products.js');
const related = require('../models/related_products.js');
const styles = require('../models/styles.js');

test('retrieve product details', () => {
  details(1)
  .then(product => {
    expect(product.decription).toBe("The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.")
    expect(product.features.length).toBe(2);
    expect(product.category).toBe("Jackets");
  })
});

test('retrieve products', () => {
  products()
  .then(productArr => expect(productArr.length).toBe(5));

  products(1000, 3)
  .then(productArr => {
    expect(productArr.length).toBe(3);
    expect(productArr[2]["product_id"]).toBe(3000);
  });
});

test('retrieve related products', () => {
  related(5555)
  .then(related_prods => {
    expect(related_prods.length).toBe(4);
    expect(related_prods.includes(2758)).toBe(true);
    expect(related_prods.includes(4507)).toBe(true);
    expect(related_prods.includes(2093)).toBe(true);
    expect(related_prods.includes(5063)).toBe(true);
  });
});

test('retrieve styles', () => {
  styles(22222)
  .then(style => {
    expect(style.product_id).toBe(22222);
    expect(style.results.length).toBe(1);
    expect(style.results[0].name).toBe(Azure);
  });
});
