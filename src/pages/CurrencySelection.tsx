import { Link } from "react-router-dom";
import Back from "@/assets/back.svg";
import CurrencyCard from "@/components/CurrencyCard";
import CurrencySearch from "@/components/SearchCurrency";
export default function CurrencySelection() {
  console.log("fs");
  return (
    <div className="w-full flex flex-col gap-[2px]">
      <header className="w-full py-4">
        <div className="container mx-auto px-2">
          <div className="relative w-full flex items-center justify-center">
            <Link className="absolute left-0" to={"/"}>
              <img src={Back} alt="Back" />
            </Link>
            <h1 className="text-center text-[1.25rem] font-medium">
              Изменить валюту
            </h1>
          </div>
        </div>
      </header>
      <main>
        <div className="flex flex-col">
          <div className="container mx-auto px-1">
            <div className="flex flex-col gap-[1.36rem]">
              <CurrencySearch />
              <CurrencyCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
