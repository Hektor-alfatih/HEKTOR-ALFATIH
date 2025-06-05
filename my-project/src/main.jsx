import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sas from './SAS.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sas />
  </StrictMode>,
)
