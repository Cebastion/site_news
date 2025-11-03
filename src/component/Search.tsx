import type { FC } from "react";
import type SearchProps from "../interface/page/Search.interface";

const Search: FC<SearchProps> = ({ search, setSearch }) => {
    return (
        <input
            type="text"
            value={search}
            placeholder="Search news..."
            onChange={(e) => setSearch(e.target.value)}
            className="
            text-black
        w-full
        max-w-md
        px-4
        py-2
        border
        border-gray-300
        rounded-lg
        shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        focus:border-blue-400
        transition
        duration-200
        placeholder-gray-400
      "
        />
    );
};

export default Search;

