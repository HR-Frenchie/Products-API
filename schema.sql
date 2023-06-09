-- Be sure to create the database.
-- CREATE DATABASE products;

DROP TABLE IF EXISTS related_products;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS skus;
DROP TABLE IF EXISTS styles;
DROP TABLE IF EXISTS products;

CREATE TABLE products (
  product_id integer PRIMARY KEY,
  name varchar(50) NOT NULL,
  slogan varchar(250),
  description varchar(500),
  category varchar(50),
  default_price numeric NOT NULL,
  created_at timestamptz DEFAULT current_timestamp,
  updated_at timestamptz DEFAULT current_timestamp
);

CREATE TABLE styles (
  style_id integer PRIMARY KEY,
  product_id integer REFERENCES products NOT NULL,
  name varchar(50) NOT NULL,
  original_price numeric NOT NULL,
  sale_price numeric NULL,
  is_default boolean
);

CREATE TABLE skus (
  sku integer PRIMARY KEY,
  style_id integer REFERENCES styles NOT NULL,
  quantity integer CHECK (quantity >= 0),
  size varchar(15)
);

CREATE TABLE photos (
  photo_id integer PRIMARY KEY,
  style_id integer REFERENCES styles NOT NULL,
  thumbnail_url varchar(1000),
  url varchar(1000) NOT NULL
);

CREATE TABLE features (
  feature_id integer PRIMARY KEY,
  product_id integer REFERENCES products NOT NULL,
  feature varchar(50) NOT NULL,
  value varchar(100)
);

CREATE TABLE temp_related_products (
  relationship_id integer PRIMARY KEY,
  main_product_id integer REFERENCES products,
  secondary_product_id integer
);

CREATE TABLE related_products (
  relationship_id integer PRIMARY KEY,
  main_product_id integer REFERENCES products,
  secondary_product_id integer REFERENCES products
);