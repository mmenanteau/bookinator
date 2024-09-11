"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto p-8">
        <SearchBar onChange={(value: string) => setSearchValue(value)} />
        <div>{searchValue}</div>
      </main>
    </div>
  );
};

export default Home;
