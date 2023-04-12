import mongoose from 'mongoose';
import User from '../models/user';

export const register = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(200).json({ message: 'Successfully signed' });
    }
    catch (err) {
        return res.status(400).json({ error: err });
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ "email": req.body.email });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        return res.json({
            message: 'User found',
            user,
        })
    }
    catch (err) {
        return res.status(400).json(err);
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.find().populate('posts').exec();
        if (!user) {
            return res.status(404).json({ msg: 'Not found' });
        }
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}

// populate return me pora document along with chilren return krta hai
/* nested population be like:
   const user = await User.find().populate({
        path:'posts',
        populate:{
            path:'omments'
        }
    })
    .exec();
        
        
        
*/


//User.create(req.body);


export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        await User.findByIdAndRemove(userId);
        // await mongoose.model('Post').deleteMany({ author: userId });
        return res.status(200).json({ msg: 'Deleted' });
    }
    catch (err) {
        return res.status(500).json(err);
    }
}
