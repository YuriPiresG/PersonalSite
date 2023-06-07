import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Layout from "./components/Layout";
import HomeScreen from "./components/HomeScreen";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/socials",
        element: <Socials />,
      },
    ],
  },
]);

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
