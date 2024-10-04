import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Buildsection from './components/buildsection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header/>
      <Hero/>
      <Buildsection/>
  </StrictMode>
)
