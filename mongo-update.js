const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/products';
const client = new MongoClient(uri);

client.connect()
  .then(() => client.db())
  .then(db => {
    return Promise.all([
    db.products.aggregate([{
      $lookup: {
        from: "features",
        localField: "id",
        foreignField: "product_id",
        as: "features"
      },
      $unset: ["features.id", "features.product_id"]
    }]),
    db.skus.aggregate([{
      $set: { "consolidated": { $arrayToObject: [{ "k": "quantity", "v": "$quantity"}, { "k": "size", "v": "$size"}]}},
      $replaceRoot: { newRoot: { $arrayToObject: [
        {"k": "styleId", "v": "$styleId"},
        {"k": "$id", "v": "$consolidated"}
      ]}},
    }]),
    db.styles.aggregate([{
      $lookup: {
        from: "skus",
        localField: "id",
        foreignField: "styleId",
        as: "skus"
      },
      $lookup: {
        from: "photos",
        localField: "id",
        foreignField: "styleId",
        as: "photos"
      }
    }])
  ])})
  .then(() => {
    console.log("collections were updated");
    client.close()
  })
  .catch(e => console.log(e));