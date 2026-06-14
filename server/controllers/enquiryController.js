const { validationResult } = require('express-validator')
const Enquiry = require('../models/Enquiry')

/**
 * POST /api/enquiry
 * Creates a new enquiry record in MongoDB.
 */
const createEnquiry = async (req, res) => {
  // 1. Check validation results from the middleware
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    })
  }

  const { name, email, phone } = req.body

  try {
    // 2. Save enquiry to DB
    const enquiry = await Enquiry.create({ name, email, phone })

    console.log(`📬 New enquiry from ${name} <${email}> | _id: ${enquiry._id}`)

    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
    })
  } catch (error) {
    console.error('createEnquiry error:', error.message)

    // Duplicate email
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'An enquiry with this email already exists.',
      })
    }

    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    })
  }
}

module.exports = { createEnquiry }
