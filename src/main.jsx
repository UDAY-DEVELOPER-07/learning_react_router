import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx/layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about.jsx/about.jsx'
import Contact from './components/contactus/contactus.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "Contact",
//         element: <Contact/>
//       }

//     ]
//   }
// ])

// another option to create a router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/> }>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
