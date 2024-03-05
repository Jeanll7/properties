import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Dashboard } from './pages/dashboard'
import { New } from './pages/dashboard/new'
import { PropertyDetail } from './pages/propertyDetail'

import { Layout } from './components/layout'
import { Private } from './routes/Private'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/detail/:id",
        element: <PropertyDetail />
      },
      {
        path: "/dashboard",
        element: <Private><Dashboard /></Private> 
      },
      {
        path: "/dashboard/new",
        element: <Private><New /></Private> 
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }, 
  {
    path: "/register",
    element: <Register />
  }
])

export { router };
