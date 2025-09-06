import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CurrencySelectionState {
  fromCurrency: string;
  toCurrency: string;
  setFromCurrency: (currency: string) => void;
  setToCurrency: (currency: string) => void;
}

export const useCurrencySelectionStore = create<CurrencySelectionState>()(
  persist(
    (set) => ({
      fromCurrency: "USD",
      toCurrency: "RUB",
      setFromCurrency: (currency) => set({ fromCurrency: currency }),
      setToCurrency: (currency) => set({ toCurrency: currency }),
    }),
    { name: "currency-selection-store" }
  )
);
