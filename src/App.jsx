import { useRoutes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/gallery", element: <Gallery /> },
  ]);
  return (
    <div>
      <Navigation />
      <div>{routes}</div>
    </div>
  );
}

export default App;
