const router = require("express").Router();
const User = require("../models/User")
const Post = require("../models/Posts")

// CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)

    }

});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userName === req.body.userName) {
            const updatePost = await Post.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).json(updatePost);
        } else {
            res.status(401).json("You can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});



// DELETE POST 
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json("Post not found");
        }
        if (post.userName === req.body.userName) {
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("Post has been deleted");
        } else {
            res.status(401).json("You can delete only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});



// GET POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});


// GET ALL POST
router.get("/", async (req, res) => {
    const username = req.query.user
    const catName = req.query.cat
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        }
        else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            })
        } else {
            posts = await Post.find()
        }
        posts = await Post.find(req.params.id);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router
