"use client";

import { useState } from "react";
import Image from "next/image";

import { fetchBooks } from "@/api/books";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const books = fetchBooks();

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto p-8">
        <SearchBar onChange={(value: string) => setSearchValue(value)} />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {books.map((book) => (
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
                  {book.title} - {book.author.firstname} {book.author.lastname}
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
