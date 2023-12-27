import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Aye world!</div>
  }
])

export default function App() {
  return <RouterProvider router={router} />
}