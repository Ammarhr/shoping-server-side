const client = require('../database');

class User {

    async create(record) {

        let sql_query = 'SELECT user_name FROM users WHERE user_name=$1;';
        let safeValue = [record.user_name]

        if (record) {

            return client.query(sql_query, safeValue).then(async(dataResults) => {

                if (dataResults.rowCount > 0) {

                    throw 'the user name is not valid!';
                } else {
                    let sql_query = 'INSERT INTO users (user_name, user_password, email) VALUES ($1, $2, $3) RETURNING*;';
                    let safeValue = [record.user_name, record.user_password, record.email];

                    return await client.query(sql_query, safeValue).then(results => {
                        return results.rows;
                    }).catch(err => {
                        console.log('error in database body request', err);
                    })
                }
            }).catch(err => {
                console.log('error in database query', err);
            })
        }
    }

    readUser(username) {

        let sql_query = 'SELECT * FROM users WHERE user_name=$1;';
        let safeValue = [username];
        return client.query(sql_query, safeValue).then((user) => {

            return user;
        }).catch(err => {
            console.log('the user not found', err);
            return err;
        })
    }

    async deletAll() {
        let sql_query = 'DELETE FROM users;'
        return client.query(sql_query).then((results) => {
            console.log(results, 'this is the deletion');
        })
    }

}

module.exports = new User();