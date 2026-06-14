import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e1b4b',
            color: '#e0e7ff',
            borderRadius: '12px',
            border: '1px solid #4338ca',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#6366f1', secondary: '#e0e7ff' },
          },
          error: {
            iconTheme: { primary: '#f97316', secondary: '#fff' },
          },
        }}
      />
    </ThemeProvider>
  </React.StrictMode>
)
