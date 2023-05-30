COPY products(product_id, name, slogan, description, category, default_price)
FROM '/Users/alexcaron/hackreactor/sdc/Products-API/data/product.csv' DELIMITER ',' CSV HEADER
NULL 'null';

COPY styles(style_id, product_id, name, sale_price, original_price, is_default)
FROM '/Users/alexcaron/hackreactor/sdc/Products-API/data/styles.csv' DELIMITER ',' CSV HEADER
NULL 'null';

COPY skus(sku, style_id, size, quantity)
FROM '/Users/alexcaron/hackreactor/sdc/Products-API/data/skus.csv' DELIMITER ',' CSV HEADER
NULL 'null';

COPY photos(photo_id, style_id, url, thumbnail_url)
FROM '/Users/alexcaron/hackreactor/sdc/Products-API/data/photos-clean.csv' DELIMITER ',' CSV HEADER
NULL 'null';

COPY features(feature_id, product_id, feature, value)
FROM '/Users/alexcaron/hackreactor/sdc/Products-API/data/features.csv' DELIMITER ',' CSV HEADER
NULL 'null';

COPY temp_related_products(relationship_id, main_product_id, secondary_product_id)
FROM '/Users/alexcaron/hackreactor/sdc/Products-API/data/related.csv' DELIMITER ',' CSV HEADER
NULL 'null';

INSERT INTO related_products (SELECT * FROM temp_related_products WHERE NOT secondary_product_id = 0);

DROP TABLE temp_related_products;

CREATE INDEX products_index ON products (product_id);
CREATE INDEX styles_index ON styles (style_id);
CREATE INDEX styles_product_index ON styles (product_id);
CREATE INDEX skus_index ON skus (style_id);
CREATE INDEX photos_index ON photos (style_id);
CREATE INDEX features_index ON features (product_id);
CREATE INDEX related_index ON related_products (main_product_id);

ALTER TABLE styles ADD COLUMN photos jsonb[];
UPDATE styles SET photos = (SELECT
	array_agg (jsonb_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url))
FROM
    photos
WHERE photos.style_id = styles.style_id);