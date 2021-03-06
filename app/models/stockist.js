var db = require('./db')
var stockist = db.Schema({    
    user_id: {
        type: String,
        required: true
    },
    stockist_code: {
        type: String,
        
    },
    stockist_name: {
        type: String,
        
    },
    stockist_areacode: {
        type: String,
        
    },
    stockist_address: {
        type: String,
        
    },
    stockist_openingbalance: {
        type: String
    },

    stockist_bstcode: {
        type: String
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = db.model('stockist', stockist)
