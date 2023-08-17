import mongoose from "mongoose";

const pollSchema = mongoose.Schema({
    question: String,
    options: [
        {
            option: String,
            votes: {
                type: Number,
                default: 0
            }
        }
    ]
})

const Poll = mongoose.model('Poll', pollSchema);
export default Poll;