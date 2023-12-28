import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import CSSReset from "./styles/CSSReset";
import GlobalStyle from "./styles/GlobalStyle";
import FontDeclarations from "./styles/FontDeclarations";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <FontDeclarations />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
