const router = require("express").Router();
const User = require("../models/User")
const Post = require("../models/Posts")
const bcrypt = require("bcrypt")

// Update
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updateUser)
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error whitin the server" });
        }
    } else {
        res.status(401).json({ error: "You Can Update only your account!" })
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(404).json("Post not founddddd")
        }
        if(post.userName === req.body.userName){
            await Post.findByIdAndDelete(req.params.id)
            res.status(200).json("Post has been delete")
        }
        else {
            res.status(401).json({ error: "You Can Update only your account!" })
        }
    } catch (err) {
        res.status(500).json(err)

    }
});

// GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router
