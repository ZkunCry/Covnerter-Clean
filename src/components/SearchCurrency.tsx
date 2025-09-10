import { useState } from "react";
import { useDebounceFn } from "@reactuses/core";
import useSearch from "@/store/useSearch";
import { X, Search } from "lucide-react";
export default function CurrencySearch() {
  const [query, setQuery] = useState("");
  const setSearchString = useSearch((state) => state.setSearchString);
  const { run } = useDebounceFn((query: string) => setSearchString(query), 500);
  const handleChange = (query: string) => {
    setQuery(query);
    run(query);
  };

  return (
    <div className="relative w-full">
      <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        placeholder="Search currency..."
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full pl-7 pr-10 py-2 border-b border-gray-400 focus:outline-none focus:border-gray-600 placeholder-gray-400"
      />

      {query && (
        <button
          onClick={() => handleChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
