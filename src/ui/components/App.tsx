import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Aye world!</div>,
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
