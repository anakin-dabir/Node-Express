import mongoose from "mongoose";

// => Schema(structure of mongoDb document) definition of model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // created: { type: Date, default: Date.now },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
},
    { timestamps: true }
)

UserSchema.pre('deleteMany', async (next) => {
    try {
        await this.model('Post').deleteMany({ author: this._id });
        next();
    }
    catch (err) {
        next(err);
    }
})

// => mongoose.model defines a new model in collection
export default mongoose.model('User', UserSchema);


// name: { type: String, trim: true, required: 'Name is required' },
    // email: {
    //     type: String, trim: true, unique: 'Email already exists',
    //     match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    //     required: 'Email is required'
    // },
    // created: { type: Date, default: Date.now },
    // updated: Date,
    // password: String,