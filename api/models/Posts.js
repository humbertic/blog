const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        userName: {
            type: String,
            required: true,
        },
        catgories: {
            type: Array,
            required: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);