import { BookAuthor } from "@/types/BookAuthor";
import { BookCategory } from "@/types/BookCategory";
import { BookType } from "@/types/BookType";

export type Book = {
  id: string;
  title: string;
  author: BookAuthor;
  price: number;
  cover: string;
  description: string;
  type: BookType;
  publisher: string;
  releaseDate: Date;
  numberOfPages: number;
  language: string;
  category: BookCategory;
};
