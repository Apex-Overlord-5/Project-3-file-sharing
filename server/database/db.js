import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGODB_URL = `mongodb+srv://RubeshMERN:summertraining@rubesh-summer-training.xhbrvtg.mongodb.net/?retryWrites=true&w=majority`;
    try{
         await mongoose.connect(MONGODB_URL, {useNewUrlParser: true});
        console.log('Database Connected Successfully ... All THANKS to Rubesh ')

    } catch (error) {
        console.error('Error while connecting DataBase.... Ask Admin Rubesh to Resolve', error.message);
    }
}

export default DBConnection;

// https://cloud.mongodb.com/v2/64b050423d6d4110e8539ac1#/metrics/replicaSet/64b056508d93fa503fd42c53/explorer/test/files/find