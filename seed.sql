TRUNCATE TABLE products RESTART IDENTITY;
TRUNCATE TABLE styles RESTART IDENTITY;
TRUNCATE TABLE skus RESTART IDENTITY;
TRUNCATE TABLE photos RESTART IDENTITY;
TRUNCATE TABLE features RESTART IDENTITY;
TRUNCATE TABLE related_products RESTART IDENTITY;

COPY products(product_id, name, slogan, description, category, default_price)
FROM './data/product.csv' DELIMITER ',' CSV HEADER;

COPY styles(style_id, product_id, name, sale_price, original_price, is_default)
FROM './data/styles.csv' DELIMITER ',' CSV HEADER;

COPY skus(sku, style_id, size, quantity)
FROM './data/skus.csv' DELIMITER ',' CSV HEADER;

COPY photos(photo_id, style_id, url, thumbnail_url)
FROM './data/photos.csv' DELIMITER ',' CSV HEADER;

COPY features(feature_id, product_id, feature, value)
FROM './data/features.csv' DELIMITER ',' CSV HEADER;

COPY related_products(relationship_id, main_product_id, secondary_product_id)
FROM './data/related.csv' DELIMITER ',' CSV HEADER;

