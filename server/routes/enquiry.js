const express = require('express')
const router = express.Router()
const { createEnquiry } = require('../controllers/enquiryController')
const { validateEnquiry } = require('../middleware/validate')

// POST /api/enquiry  →  validate  →  createEnquiry
router.post('/', validateEnquiry, createEnquiry)

module.exports = router
