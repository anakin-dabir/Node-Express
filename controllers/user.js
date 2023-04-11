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
        const user = await User.find({});
        console.log(user);
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}

//User.create(req.body);