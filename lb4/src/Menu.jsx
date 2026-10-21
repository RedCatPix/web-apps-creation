import { NavLink } from "react-router";
import { useFavorites } from "./useFavorites";

export default function Menu() {
  const { favoriteIds } = useFavorites();

  return (
    <nav style={{display: "flex", flexDirection: "column"}}>
      <NavLink to="/">Книги</NavLink>
      <NavLink to="/favorites">Избранное: {favoriteIds.length}</NavLink>
    </nav>
  );
}
