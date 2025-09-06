import { type CurrencyRate } from "../entities/CurrencyRate";

export class ConvertCurrency {
  execute(
    amount: number,
    from: string,
    to: string,
    rates: Record<string, CurrencyRate>
  ): number {
    if (from === "RUB") {
      if (to === "RUB") return amount;
      return amount / rates[to].Value;
    }
    if (to === "RUB") {
      return amount * rates[from].Value;
    }
    const fromToRub = rates[from].Value;
    const toToRub = rates[to].Value;
    return (amount * fromToRub) / toToRub;
  }
}
