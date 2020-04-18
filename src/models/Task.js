const { Schema, model } = require('mongoose');

const schema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.export = model('Task', schema);