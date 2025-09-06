import { type CurrencyRepository } from "../../domain/repositories/CurrencyRepository";
import { type RatesResponse } from "../../domain/entities/CurrencyRate";
import { API_URL, axiosInstance } from "../../config/api";
export class CurrencyRepositoryImpl implements CurrencyRepository {
  async fetchRates(): Promise<RatesResponse> {
    const response = await axiosInstance.get<RatesResponse>(API_URL);
    response.data.Valute["RUB"] = {
      CharCode: "RUB",
      ID: "0",
      Name: "Российский рубль",
      Nominal: 1,
      Value: 1.0,
    };
    return response.data;
  }
}
