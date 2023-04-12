import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title: String,
    desc: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true } //it will auto give createdAt and updatedAt fields
)

//middleware to implement a on CASCADE function
postSchema.pre('remove', async (next) => {
    try {
        const user = await mongoose.model('User').findById(this.author);
        user.posts.filter((id) => id.toString() !== this._id.toString());
        await user.save();
        next();
    }
    catch (err) {
        console.log(err);
    }
})


export default mongoose.model('Post', postSchema);