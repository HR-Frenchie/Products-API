const request = require('supertest');
const app = require('../app.js');

test('styles endpoint', () => {
  request(app)
  .get('/products/1')
  .expect(200)
  .expect('Content-Type', 'application/json')
  .expect(function(res) {
    expect(res.body.hasOwnProperty('description'));
    expect(res.body.hasOwnProperty('features'));
    expect(res.body.hasOwnProperty('category'));
  })
  .end(function(err, res) {
      if (err) throw err;
  });
});

test('products by page', () => {
  request(app)
  .get('/products?page=1000&count=3')
  .expect(200)
  .expect('Content-Type', 'application/json')
  .expect(function(res) {
    expect(res.body.length).toBe(3);
    expect(res.body[2]["product_id"]).toBe(3000);
  })
  .end(function(err, res) {
        if (err) throw err;
  });
});

test('related', () => {
  request(app)
  .get('/products/5555/related')
  .expect(200)
  .expect('Content-Type', 'application/json')
  .expect(function(res) {
    expect(res.body.length).toBe(4);
    expect(res.body[0]).toBe(2758);
    expect(res.body[1]).toBe(4507);
    expect(res.body[2]).toBe(2093);
    expect(res.body[3]).toBe(5063);
  })
  .end(function(err, res) {
        if (err) throw err;
  });
});

test('styles', () => {
  request(app)
  .get('/products/22222/styles')
  .expect(200)
  .expect('Content-Type', 'application/json')
  .expect(function(res) {
    expect(res.body['product_id']).toBe(22222);
    expect(res.body.results[0].name).toBe('Azure');
  })
  .end(function(err, res) {
        if (err) throw err;
  });
});
