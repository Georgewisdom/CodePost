const express = require("express");
const Posts = require("../../model/posts");
const router = express.Router();

// Create Post
router.post("/", async (req, res) => {
  try {
    const newPost = await new Posts({
      title: req.body.title,
      body: req.body.body
    }).save();

    res.status(201).json({
      msg: "Post Created",
      newPost
    });
  } catch (error) {
    console.error(error);
  }
});
// Get Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
});

// Get Posts
router.get("/:id", async (req, res) => {
  try {
    const posts = await Posts.findById(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
});

// Get Some Posts
router.get("/:limit", async (req, res) => {
  try {
    const posts = await Posts.find().limit(parseInt(req.params.limit));
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
});

// Delete Post
router.delete("/:id", async (req, res) => {
  try {
    await Posts.findOneAndRemove(req.params.id)
      .then(() => {
        res.status(200).json({
          msg: "Delete Success"
        });
      })
      .catch(error => {
        res.json({
          error: error,
          msg: "Unsuccessful "
        });
      });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
