import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
// import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Dashboard from './pages/Dashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard type='PROFILE' />} />
          <Route path="/my-class" element={<Dashboard type='MY-CLASS' />} />
          <Route path="/my-order" element={<Dashboard type='MY-ORDER' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
