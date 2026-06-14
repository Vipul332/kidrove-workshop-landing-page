// Registration form data sent to the API
export interface EnquiryFormData {
  name: string
  email: string
  phone: string
}

// API response shape
export interface ApiResponse {
  success: boolean
  message: string
}

// Workshop detail card
export interface WorkshopDetail {
  icon: string
  label: string
  value: string
  color: string
}

// Learning outcome item
export interface LearningOutcome {
  icon: string
  title: string
  description: string
}

// FAQ item
export interface FaqItem {
  question: string
  answer: string
}
