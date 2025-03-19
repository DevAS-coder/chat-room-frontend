import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Chatroom from '../components/Chatroom.jsx'
import { UsernameProvider } from '../Context/Username.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/chatroom',
    element: <Chatroom />,
  }
])

createRoot(document.getElementById('root')).render(
  <UsernameProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </UsernameProvider>
)
