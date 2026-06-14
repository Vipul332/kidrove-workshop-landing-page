/// <reference types="vite/client" />
import axios from 'axios'
import type { EnquiryFormData, ApiResponse } from '../types'

// Base URL: use env var in production, fall back to relative path (proxied by Vite)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
})

/**
 * Submit a workshop enquiry / registration.
 */
export const submitEnquiry = async (data: EnquiryFormData): Promise<ApiResponse> => {
  const response = await api.post<ApiResponse>('/api/enquiry', data)
  return response.data
}
