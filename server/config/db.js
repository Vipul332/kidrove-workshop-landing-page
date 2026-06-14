const mongoose = require('mongoose')

/**
 * Connect to MongoDB using the URI from environment variables.
 * Exits the process on failure so the server doesn't start with no DB.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // These options are defaults in Mongoose 7+ but kept for clarity
    })
    console.log(`✅ MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
