import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connectmongodb+srv://sundaybukola10:LnFR4rSJaLgwBswU@cluster0.yjspc.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MONGODB", error.message);
		process.exit(1);
	}
};
