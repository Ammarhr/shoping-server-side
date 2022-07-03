const client = require('../database')

class User {

    async create(record) {

        let sql_query = 'SELECT user_name FROM users WHERE user_name=$1;';
        let safeValue = [record.user_name]

        if (record) {
            // console.log('helooo =====>1', record, safeValue, sql_query);

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
                        // let sql_query1 = 'SELECT user_name FROM users;';
                        // return client.query(sql_query1).then((results) => {

                    //     return results.rows;
                    // }).catch(err => {
                    //     console.log('error in get database data', err);
                    // })
                }
            }).catch(err => {
                console.log('error in database query', err);
            })
        }
    }
    readUser(username) {
        // console.log(username, 'befor--->');
        let sql_query = 'SELECT * FROM users WHERE user_name=$1;';
        let saveValue = [username];
        return client.query(sql_query, saveValue).then((user) => {
            // console.log('this is the basic user from database---<', user);
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
    createProduct() {
        let sql_query = 'DELETE * FROM product WHERE'
    }
}

module.exports = new User();