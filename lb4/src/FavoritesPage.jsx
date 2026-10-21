import { books } from "./books";
import { useFavorites } from "./useFavorites";
import { Link } from "react-router";

export default function FavoritesPage() {
  const { favoriteIds, removeFavorite, removeFavoriteAll } = useFavorites();
  // const { favoriteIds_s, removeFavoriteAll } = useFavorites();
  const selected = books.filter(book => favoriteIds.includes(book.id));

  return (
    <div>
      <h1>Избранное</h1>
      <button onClick={() => removeFavoriteAll(selected)}>Удалить</button>
      {selected.length === 0 && <p>Избранное пусто</p>}
      <section style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap:"20px"}}>
        {selected.map(book => (
          <article style={{border: "1px solid black", padding: "2rem 1rem", textAlign: "center", borderRadius: "8px"}} key={book.id}>
            <h2>
              <Link style={{textDecoration: "none"}} to={`/books/${book.id}`}>{book.title}</Link>
            </h2>
            <p>{book.author}</p>
            <button onClick={() => removeFavorite(book.id)}>Удалить</button>
          </article>
        ))}
      </section>
    </div>
  );
}
