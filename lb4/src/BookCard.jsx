import { Link } from "react-router";

export default function BookCard({ book, isFavorite, onAdd }) {
  return (
    <article style={{border: "1px solid black", padding: "2rem 1rem", textAlign: "center", borderRadius: "8px"}}>
      <h2>
        <Link style={{textDecoration: "none"}} to={`/books/${book.id}`}>{book.title}</Link>
      </h2>
      <p>{book.author}</p>
      <button disabled={isFavorite} onClick={() => onAdd(book.id)}>
        {isFavorite ? "В избранном" : "В избранное"}
      </button>
    </article>
  );
}
