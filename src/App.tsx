import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CurrencyServices } from "@/services/CurrencyService";
import Converter from "@/pages/Converter";
import CurrencySelection from "@/pages/CurrencySelection";

function App() {
  useEffect(() => {
    (async () => {
      await CurrencyServices.fetchRates();
    })();
  }, []);

  return (
    <div className="flex flex-col min-h-dvh items-center ">
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/select/" element={<CurrencySelection />} />
      </Routes>
    </div>
  );
}

export default App;
