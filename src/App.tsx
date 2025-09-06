import { useEffect } from "react";
import { CurrencyRepositoryImpl } from "./data/repositories/CurrencyRepositoryImpl";
import { useCurrencyStore } from "./data/store/currencyStore";
import { FetchRates } from "./domain/usecases/FetchRates";
import { Route, Routes } from "react-router-dom";
import Converter from "./presentation/pages/Converter";
import CurrencySelection from "./presentation/pages/CurrencySelection";
const fetchRate = new FetchRates(new CurrencyRepositoryImpl());
function App() {
  const setRates = useCurrencyStore((state) => state.setRates);

  useEffect(() => {
    (async () => {
      const rates = await fetchRate.execute();
      setRates(rates);
    })();
  }, []);

  return (
    <div className="flex flex-col min-h-dvh items-center ">
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/select/:type" element={<CurrencySelection />} />
      </Routes>
    </div>
  );
}

export default App;
