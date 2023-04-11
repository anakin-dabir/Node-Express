import mongoose from "mongoose";

const connectDb = async (url) => {
    try {
        await mongoose.connect(url,
            { useNewUrlParser: true, useUnifiedTopology: true, }
        );
        console.log(`DB Connected at ${url}`);
    }
    catch (err) {
        console.log(`Error in connection ${err}`);
        //process.exit(1); //error indication => 1
    }
}
export default connectDb;


//console.log('MongoDB connected successfully');
// console.error('MongoDB connection error:', err.message);
// process.exit(1);



// export default connectDb;




/*
mongoose.connect('mongodb://127.0.0.1:27017/Node-Express', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('error', (err) => console.log('Error', err));
mongoose.connection.once('open', () => console.log('DB Connected'));
*/