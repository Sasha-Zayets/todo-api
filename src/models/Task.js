import { Schema, model } from 'mongoose';

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

export default model('Task', schema);