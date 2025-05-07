"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { fetchBooks } from "@/api/books";
import SearchBar from "@/components/SearchBar";
import { Book } from "@/types/Book";
import { includesWithIgnore } from "@/utils/string";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(fetchBooks());
  }, []);

  useEffect(() => {
    const filterBooks = (books: Book[], value: string): Book[] => {
      if (value === "") {
        return books;
      }
      return books.filter(
        (book) =>
          includesWithIgnore(book.title, value) ||
          includesWithIgnore(book.author.name, value)
      );
    };

    const filteredBooks = filterBooks(books, searchValue);
    setFilteredBooks(filteredBooks);
  }, [books, searchValue]);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto p-8">
        <SearchBar onChange={(value: string) => setSearchValue(value)} />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredBooks.map((book) => (
            <li key={book.id} className="card bg-base-300 hover:shadow-xl">
              <figure className="pt-10">
                <Image
                  className="h-[200px] object-contain"
                  src={book.cover}
                  alt=""
                  width={150}
                  height={200}
                />
              </figure>
              <div className="card-body items-center">
                <div className="card-title">
                  {book.title} - {book.author.name}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
