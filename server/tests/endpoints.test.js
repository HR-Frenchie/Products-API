const request = require('supertest');
const app = require('../app.js');

test('products endpoint', () => {
  return request(app)
  .get('/products/1')
  .expect(200)
  .expect('Content-Type', 'application/json; charset=utf-8')
  .expect(function(res) {
    expect(res.body.hasOwnProperty('description'));
    expect(res.body.hasOwnProperty('features'));
    expect(res.body.hasOwnProperty('category'));
  })
  .catch((err) => {
      if (err) throw err;
  });
});

test('products by page', () => {
  return request(app)
  .get('/products?page=1000&count=3')
  .expect(200)
  .expect('Content-Type', 'application/json; charset=utf-8')
  .expect(function(res) {
    expect(res.body.length).toBe(3);
    expect(res.body[2]["product_id"]).toBe(3000);
  })
  .catch((err) => {
    if (err) throw err;
  });
});

test('related', () => {
  return request(app)
  .get('/products/5555/related')
  .expect(200)
  .expect('Content-Type', 'application/json; charset=utf-8')
  .expect(function(res) {
    expect(res.body.length).toBe(4);
    expect(res.body[0]).toBe(2758);
    expect(res.body[1]).toBe(4507);
    expect(res.body[2]).toBe(2093);
    expect(res.body[3]).toBe(5063);
  })
  .catch((err) => {
    if (err) throw err;
  });
});

test('styles', () => {
  return request(app)
  .get('/products/22222/styles')
  .expect(200)
  .expect('Content-Type', 'application/json; charset=utf-8')
  .expect(function(res) {
    expect(res.body['product_id']).toBe('22222');
    expect(res.body.results[0].name).toBe('Azure');
  })
  .catch((err) => {
    if (err) throw err;
  });
});