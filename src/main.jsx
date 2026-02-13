import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyProvider } from './context/MyProvider.jsx'
import { CounterProvider } from './context/CounterProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <MyProvider>
    <CounterProvider>
      <App />

    </CounterProvider>
  </MyProvider>,
)
