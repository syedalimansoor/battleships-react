import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import CSSReset from "./styles/CSSReset";
import GlobalStyle from "./styles/GlobalStyle";
import FontDeclarations from "./styles/FontDeclarations";
import Home from "./pages/Home";
import Planning from "./pages/Planning";
import Header from "./layouts/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <Header />,
    children: [
      {
        path: "planning",
        element: <Planning />,
      },
    ],
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
