import { type RatesResponse } from "../entities/CurrencyRate";
import { type CurrencyRepository } from "../repositories/CurrencyRepository";

export class FetchRates {
  constructor(private currencyRepository: CurrencyRepository) {}

  async execute(): Promise<RatesResponse> {
    return await this.currencyRepository.fetchRates();
  }
}
