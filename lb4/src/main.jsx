import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import FavoritesProvider from "./FavoritesProvider";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </BrowserRouter>
);
