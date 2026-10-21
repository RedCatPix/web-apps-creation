import { Routes, Route } from "react-router";
import Menu from "./Menu";
import CatalogPage from "./CatalogPage";
import FavoritesPage from "./FavoritesPage";
import BookPage from "./BookPage";

export default function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
    </>
  );
}
