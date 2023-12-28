import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import CSSReset from "../styles/CSSReset";
import GlobalStyle from "../styles/GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Aye world!</div>,
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
