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
        <span>{searchValue}</span>
        <ul className="grid grid-cols-3 gap-6 mt-8">
          {books.map((book) => (
            <li key={book.id} className="card card-side bg-base-100 p-4">
              <Image
                className="w-auto h-auto"
                src={book.cover}
                alt=""
                width={100}
                height={200}
              />
              <div className="card-body">
                <div className="card-title text-white">
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
