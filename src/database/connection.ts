import { env } from "@/utils/env"
import mongoose from "mongoose"

let connection: mongoose.Connection
async function dbConnect() {
  if (connection?.readyState) {
    return
  }

  try {
    const db = await mongoose.connect(env.mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 50000000,
    })

    connection = db.connections[0]
  } catch (error: any) {
    console.log(error.message)
  }
}

dbConnect()
