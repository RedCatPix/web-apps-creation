import { books } from "./books";
import { useFavorites } from "./useFavorites";
import BookCard from "./BookCard";

export default function CatalogPage() {
  const { favoriteIds, addFavorite } = useFavorites();

  return (
    <div>
      <h1>Books</h1>
      <section style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap:"20px"}}>
        {books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            isFavorite={favoriteIds.includes(book.id)}
            onAdd={addFavorite}
          />
        ))}
      </section>
    </div>
  );
}
