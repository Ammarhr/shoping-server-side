const client = require('../database')

class Category {

    createCategory(category) {
        let sql_query = 'INSERT INTO category (title) VALUES ($1) RETURNING*;';
        let safeValues = [category.title];
        return client.query(sql_query, safeValues).then(results => {
            return results;
        }).catch(err => {
            console.log(err, 'message')
        });
    }

    getCategories() {
        let sql_query = 'SELECT * FROM category;';
        return client.query(sql_query).then(results => {
            return results;
        }).catch(err => {
            console.log(err, 'message')
        });
    }

    deleteCategory(_id) {
        let sql_query = 'DELETE FROM category WHERE id=$1;';
        let safeValue = [_id];
        return client.query(sql_query, safeValue).then(results => {
                return 'category deleted';
            }).then()
            .catch(err => {
                console.log(err, 'message')
            });
    }
}

module.exports = new Category();