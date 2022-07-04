const client = require('../database');

class Product {

    createProduct(product) {
        let sql_query = 'INSERT INTO product (category_id, title, over_view, price, img_url, quantity) VALUES ($1, $2, $3, $4, $5, $6) RETURNING*;';
        let safeValues = [product.category_id, product.title, product.over_view, product.price, product.img_url, product.quantity];
        return client.query(sql_query, safeValues).then(results => {
            return results;
        }).catch(err => {
            console.log(err, 'message')
            throw err;
        });
    }

    getProducts() {
        let sql_query = 'SELECT * FROM product;';
        return client.query(sql_query).then(results => {
            return results;
        }).catch(err => {
            console.log(err, 'message')
            throw err;
        });
    }

    deleteProduct(_id) {
        let sql_query = 'DELETE FROM product WHERE id=$1;';
        let safeValue = [_id];
        return client.query(sql_query, safeValue).then(results => {
                return 'category deleted';
            }).then()
            .catch(err => {
                console.log(err, 'message')
            });
    }
    updateProduct(_id, product) {

        let sql_query = 'UPDATE product SET category_id=$1, title=$2, over_view=$3, price=$4, img_url=$5, quantity=$6 WHERE id=$7;';
        let safeValues = [product.category_id, product.title, product.over_view, product.price, product.img_url, product.quantity, _id];
        return client.query(sql_query, safeValues).then(results => {
                return results;
            }).then()
            .catch(err => {
                console.log(err, 'message')
            });
    }

}

module.exports = new Product();