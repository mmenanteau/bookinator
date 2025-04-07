"use client";

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  return (
    <input
      className="input input-bordered input-primary w-full max-w-xs"
      type="search"
      placeholder="Search here"
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
};

export default SearchBar;
