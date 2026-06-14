require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

// ── Connect to MongoDB ──────────────────────────────────────────────────────
connectDB()

const app = express()

// ── CORS ────────────────────────────────────────────────────────────────────
const allowedOrigins = (process.env.CORS_ORIGIN ?? 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, Postman)
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true)
      callback(new Error(`CORS policy: origin ${origin} not allowed`))
    },
    methods: ['GET', 'POST'],
    credentials: true,
  })
)

// ── Body Parsing ────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// ── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/enquiry', require('./routes/enquiry'))

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

// Global error handler
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err.message)
  res.status(500).json({ success: false, message: 'Internal server error' })
})

// ── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT ?? 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
