import { Link, useParams } from "react-router";
import { books } from "./books";
import { useFavorites } from "./useFavorites";
import BookCard from "./BookCard";

export default function BookPage() {
  const { id } = useParams();
  const { favoriteIds, addFavorite } = useFavorites();
  const book = books.find(b => b.id === Number(id));

  if (!book) return <p>Книга не найдена</p>;

  return (
    <section>
      <BookCard
        book={book}
        isFavorite={favoriteIds.includes(book.id)}
        onAdd={addFavorite}
      />
      <Link to="/">Все книги</Link>
    </section>
  );
}
