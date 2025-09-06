import { type RatesResponse } from "../entities/CurrencyRate";

export interface CurrencyRepository {
  fetchRates(): Promise<RatesResponse>;
}
