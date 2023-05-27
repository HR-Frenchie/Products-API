// 1. Set up database in mongosh:
//   $ mongosh
//   > use products

// 2. Create temporary and permanent collections by running this file in node.

// 3. Seed the temporary database by running these commands in the UNIX shell:
/*
mongoimport --db=products --collection=products --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/product.csv
mongoimport --db=products --collection=features --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/features.csv
mongoimport --db=products --collection=related_products --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/related.csv
mongoimport --db=products --collection=photos --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/photos-clean.csv
mongoimport --db=products --collection=skus --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/skus.csv
mongoimport --db=products --collection=styles --type=csv --headerline --file=/Users/alexcaron/hackreactor/sdc/Products-API/data/styles.csv
*/
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/products';
const client = new MongoClient(uri);

client.connect()
  .then(() => client.db())
  .then(db => Promise.all([
    db.createCollection('products'),
    db.createCollection('related_products'),
    db.createCollection('styles'),
    db.createCollection('features'),
    db.createCollection('photos'),
    db.createCollection('skus')
    ]))
  .then(() => {
    console.log("collections were created");
    client.close()
  })
  .catch(e => console.log(e));

// 4. Update the data

/*

db.products.aggregate([
  { $lookup: { from: "features", localField: "id", foreignField: "product_id", as: "features" } },
  { $project: { "features._id": 0, "features.product_id": 0 } },
  { $out: { db: "products", coll: "products"}}
])




*/