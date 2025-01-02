import mongoose from "mongoose";


export const connectDB =async() =>{

try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected : ${connection.connection.host}`);
} catch (error) {
    console.log("connected"+error);
}


    
}