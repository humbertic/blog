const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, profilePic: {
        type: String,
        default: "https://media.istockphoto.com/id/1698148398/photo/3d-user-profile-icon-person-icon-employee-icon-avatar-icon-people-icon-web-user-symbol-social.jpg?s=612x612&w=0&k=20&c=3pOYEitRjh8KrFoUaLWuYxiz8kK9hiHr8-ph-gZDzuQ=",
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("User",UserSchema);