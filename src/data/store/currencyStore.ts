import { create } from "zustand";
import { type RatesResponse } from "../../domain/entities/CurrencyRate";
import { shallow } from "zustand/shallow";

interface CurrencyState {
  rates: RatesResponse | null;
  setRates: (rates: RatesResponse) => void;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
  rates: null,
  setRates: (rates) => set({ rates }),
}));

export const useGetValutes = () =>
  useCurrencyStore((state) => state.rates?.Valute ?? null);
