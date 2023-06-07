import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Layout from "./components/Layout";
import HomeScreen from "./components/HomeScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home", // Add forward slash before "home"
        element: <HomeScreen />,
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
