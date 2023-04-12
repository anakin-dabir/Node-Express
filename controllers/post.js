import Post from "../models/post";
import User from "../models/user";

export const createPost = async (req, res) => {
    console.log(req.body);
    try {
        const post = new Post(req.body);
        await post.save();
        const user = await User.findById(req.body.author);
        user.posts.push(post);
        await user.save();
        return res.status(201).json(post);
    }
    catch (err) {
        return res.status(500).json({ message: 'Server Error' });
    }
}

export const updatePost = async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    try {
        const postId = req.params.postId;
        const post = await Post.findByIdAndUpdate(postId, { $set: req.body }, { new: true });
        await post.save();
        const user = await User.findOneAndUpdate(req.body.author, { $addToSet: { posts: post } }, { new: true }
        );//Using $addToSet in a findOneAndUpdate() query can help mitigate this risk{race-conditions},
        await user.save();
        return res.status(200).json(post);
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}