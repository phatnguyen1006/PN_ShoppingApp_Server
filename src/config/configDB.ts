import Mongoose from "mongoose";
let database: Mongoose.Connection;

const {
    MONGO_URI = 'mongodb+srv://p:12345@shoppingblogs.mdjdz.mongodb.net/ShoppingBlogs?retryWrites=true&w=majority'
} = process.env;

export const connectDB = () => {
    // add your own uri below
    const uri = process.env.MONGO_URI;
    if (database) {
        console.log(database);
        return;
    }
    Mongoose.connect(uri as string, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    database = Mongoose.connection;
    database.once("open", async () => {
        console.log("Connected to database");
    });
    database.on("error", () => {
        console.log("Error connecting to database");
    });
};

export const disconnectDB = () => {
    if (!database) {
        return;
    }
    Mongoose.disconnect();
};