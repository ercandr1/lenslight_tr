import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: "lenslight_tr"
    }).then(() => {
        console.log("Connected to the DB succesfuly");
    }).catch((err) => {
        console.log(`DB connection err:, ${err}`);
    })
} 

export default conn;
