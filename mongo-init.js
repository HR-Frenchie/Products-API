// 1. Set up database in mongosh:
//   $ mongosh
//   > use products

// 2. Create temporary and permanent collections by running this file in node.

// 3. Seed the temporary database by running these commands in the UNIX shell:

//// mongoimport --db=products --collection=products_temp --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/product.csv
//// mongoimport --db=products --collection=features_temp --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/features.csv
//// mongoimport --db=products --collection=related_products_temp --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/related.csv
//// mongoimport --db=products --collection=photos_temp --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/photos-clean.csv
//// mongoimport --db=products --collection=skus_temp --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/skus.csv
//// mongoimport --db=products --collection=styles_temp --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/styles.csv

const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/products';
const client = new MongoClient(uri);

client.connect()
  .then(() => client.db())
  .then(db => Promise.all([
    db.createCollection('products_temp'),
    db.createCollection('feature_temp'),
    db.createCollection('related_products_temp'),
    db.createCollection('photos_temp'),
    db.createCollection('skus_temp'),
    db.createCollection('styles_temp'),
    db.createCollection('products'),
    db.createCollection('related_products'),
    db.createCollection('styles')
    ]))
  .then(() => {
    console.log("collections were created");
    client.close()
  })
  .catch(e => console.log(e));

  // mongoimport --db=reviews --collection=reviews --type=csv --headerline --file=/Users/danielleebron/Documents/Hack\ Reactor/Week8/APIcsvs/reviews.csv