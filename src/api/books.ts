import books from "@/mocks/books.json";
import { Book } from "@/types/Book";
import { BookType } from "@/types/BookType";

export const fetchBooks = (): Book[] => {
  const result: Book[] = books.map((book) => {
    return {
      ...book,
      releaseDate: new Date(book.releaseDate),
      type: book.type as BookType,
    };
  });
  return result;
};
