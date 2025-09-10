import { create } from "zustand";
interface ISearchState {
  searchString: string | null;
  setSearchString: (str: string) => void;
}

const useSearch = create<ISearchState>((set) => ({
  searchString: "",
  setSearchString: (str) => set({ searchString: str }),
}));
export default useSearch;

export const useSearchString = () => useSearch((state) => state.searchString);
