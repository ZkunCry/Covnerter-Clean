import { axiosInstance, API_URL } from "@/config/api";
import { type CurrencyRate, type RatesResponse } from "@/types/CurrencyRate";
import { useCurrencyStore } from "@/store/currencyStore";

export const CurrencyServices = {
  async fetchRates(): Promise<RatesResponse> {
    const response = await axiosInstance.get<RatesResponse>(API_URL);
    response.data.Valute["RUB"] = {
      CharCode: "RUB",
      ID: "R01014F",
      Name: "Российский рубль",
      Nominal: 1,
      NumCode: "643",
      Value: 1.0,
      Previous: 1.0,
    };
    useCurrencyStore.getState().setRates(response.data);
    return response.data;
  },

  calculate(
    amount: string,
    from: string,
    to: string,
    rates: Record<string, CurrencyRate>
  ): string {
    const amountNumber = parseFloat(amount.replace(",", "."));
    if (Number.isNaN(amountNumber)) return "0";

    const fromRate = rates[from].Value / rates[from].Nominal;
    const toRate = rates[to].Value / rates[to].Nominal;
    const result = (amountNumber * fromRate) / toRate;
    if (result == null || Number.isNaN(result)) return "";
    console.log(`Конвертация: ${amount} ${from} в ${result} ${to}`);
    return result.toFixed(5);
  },
};
