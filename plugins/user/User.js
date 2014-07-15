var Hapi = require('Hapi')

module.exports = function(users) {

    var User = {}

    User.find = function(filters, callback) {

        var response = []
        users.createReadStream()
            .on('data', function(data) {
                if (typeof filters.name === "undefined" || data.value.indexOf(filters.name) >= 0) {
                    response.push(data.value)
                }
            })
            .on('end', function(data) {
                return callback(response)
            })
    }

    User.findById = function(user_id, callback) {
        users.get(user_id, function(err, value) {
            if(err){
                return callback(Hapi.error.notFound("The user with that ID does not exist, or may alredy have been deleted."))
            } else {
                return callback(value);
            }
        })
    }

    User.create = function(id, user, callback) {
       users.put(id, user, function(err) {
            if(err){
                return callback(Hapi.error.internal("There was a problem creating the user."))
            } else {
                return callback(id)
            }
        })
    }

    User.delete = function(id, callback) {
        users.get(id, function(err, value){
            if(err){
                callback(Hapi.error.notFound("The user with that ID does not exist, or may alredy have been deleted."))
            } else {
                users.del(id, function(err){
                    if(err) {
                        return callback(Hapi.error.internal("There was an error deleting the user."))
                    } else {
                        return callback(true)
                    }
                })
            }
        })
    }

    return User
}