import { useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export default function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addFavorite(id) {
    setFavoriteIds(prev =>
      prev.includes(id) ? prev : [...prev, id]
    );
  }

  function removeFavorite(id) {
    setFavoriteIds(prev => prev.filter(x => x !== id));
  }

  function removeFavoriteAll() {
    setFavoriteIds([])
  }

  const value = { favoriteIds, addFavorite, removeFavorite, removeFavoriteAll };

  return (
    <FavoritesContext value={value}>
      {children}
    </FavoritesContext>
  );
}