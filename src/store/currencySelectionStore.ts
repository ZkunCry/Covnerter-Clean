import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type CurrencySelection } from "../types/CurrencySelection";

export interface CurrencySelectionState {
  fromCurrency: string;
  toCurrency: string;
  activeSelection: "from" | "to";
  actions: {
    setSelection: (selection: CurrencySelection) => void;
    setFromCurrency: (currency: string) => void;
    setToCurrency: (currency: string) => void;
    setActiveSelection: (selection: "from" | "to") => void;
  };
}

export const useCurrencySelectionStore = create<CurrencySelectionState>()(
  persist(
    (set) => ({
      fromCurrency: "RUB",
      toCurrency: "USD",
      activeSelection: "from",
      actions: {
        setFromCurrency: (currency: string) => set({ fromCurrency: currency }),
        setToCurrency: (currency: string) => set({ toCurrency: currency }),
        setSelection: (selection: CurrencySelection) => set(selection),
        setActiveSelection: (selection: "from" | "to") =>
          set({ activeSelection: selection }),
      },
    }),
    {
      name: "currency-selection-store",
      partialize: (state) => ({
        fromCurrency: state.fromCurrency,
        toCurrency: state.toCurrency,
        activeSelection: state.activeSelection,
      }),
    }
  )
);
//Selectors
export const useFromCurrency = () =>
  useCurrencySelectionStore((state) => state.fromCurrency);

export const useToCurrency = () =>
  useCurrencySelectionStore((state) => state.toCurrency);

export const useActiveSelection = () =>
  useCurrencySelectionStore((state) => state.activeSelection);

export const useCurrencyActions = () =>
  useCurrencySelectionStore((state) => state.actions);
