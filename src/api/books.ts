import { Book } from "@/types/Book";
import { BookType } from "@/types/BookType";
import books from "./books.json";

export const fetchBooks = (): Book[] => {
  // TODO: call API
  const result: Book[] = books.map((book) => {
    return {
      ...book,
      releaseDate: new Date(book.releaseDate),
      type: book.type as BookType,
    };
  });
  return result;
};
