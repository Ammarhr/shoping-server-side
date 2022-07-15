DROP TABLE IF EXISTS users;
-- CREATE TYPE role AS ENUM ('admin','user');
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	user_name VARCHAR(255),
	user_password VARCHAR(255),
	email VARCHAR(255),
	 role_name role 
);



CREATE TABLE favorite (
  id SERIAL PRIMARY KEY,
  users_id INT NOT NULL,
  title TEXT NOT NULL,
	over_view TEXT NOT NULL,
  price TEXT NOT NULL,
	img_url TEXT NOT NULL,
	quantity DECIMAL,
  CONSTRAINT fk_users FOREIGN KEY(users_id) REFERENCES users(id)
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  category_id INT NOT NULL,
  title TEXT NOT NULL,
	over_view TEXT NOT NULL,
  price TEXT NOT NULL,
	img_url TEXT NOT NULL,
	quantity DECIMAL,
  CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id)
);
DROP TABLE IF EXISTS comments;
	
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  review TEXT NOT NULL,
  CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES product(id)
);


