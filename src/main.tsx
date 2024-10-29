import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Polygon from './polygon.tsx'
import About from './About.tsx'
import Workxp from './Workxp.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/work',
    element: <Workxp />,
  },
  {
    path: '/about',
    element: <About />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Polygon />
  </StrictMode>,
)
