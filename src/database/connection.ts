import mongoose from "mongoose";

const connection = {};

( async function dbConnect() {
	if (connection.isConnected) {
		return;
	}

	try {
		const db = await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 50000000,
		});

		connection.isConnected = db.connections[0].readyState;

	
	} catch (error) {
		console.log(error.message);
	}
})();
