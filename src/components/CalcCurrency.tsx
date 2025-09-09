import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  useFromCurrency,
  useToCurrency,
} from "../store/currencySelectionStore";
import { useGetValutes } from "../store/currencyStore";
import { useCurrencyActions } from "../store/currencySelectionStore";
import { CurrencyServices } from "../services/CurrencyService";
interface CalcCurrencyProps {
  inputValue: string;
  activeBlock: "from" | "to";
  onBlockSelect: (block: "from" | "to", currentDisplayedValue: string) => void;
}

const CalcCurrency = ({
  inputValue,
  activeBlock,
  onBlockSelect,
}: CalcCurrencyProps) => {
  const toCurrency = useToCurrency();
  const fromCurrency = useFromCurrency();
  const rates = useGetValutes();
  const { setFromCurrency, setToCurrency, setActiveSelection } =
    useCurrencyActions();
  const fromValue =
    activeBlock === "from"
      ? inputValue || "0"
      : CurrencyServices.calculate(inputValue, toCurrency, fromCurrency, rates);

  const toValue =
    activeBlock === "to"
      ? inputValue || "0"
      : CurrencyServices.calculate(inputValue, fromCurrency, toCurrency, rates);
  console.log("From: ", fromCurrency, "To: ", toCurrency);
  return (
    <div className="flex flex-col gap-[2.5rem]">
      {/* From block */}
      <div
        className={`flex flex-col gap-[0.87rem] bg-white p-[1rem] shadow-[0_0_70px_-20px_#C4C7CC] rounded-[1.25rem]`}
      >
        <Link
          to="/select"
          className="cursor-pointer flex flex-col items-start relative title p-2 rounded-lg transition-all"
          onClick={() => {
            setActiveSelection("from");
            setFromCurrency(fromCurrency);
          }}
        >
          <h2 className="text-[1.55rem] font-medium leading-[100%]">
            {fromCurrency}
          </h2>
          <span>
            {rates && rates[fromCurrency]
              ? rates[fromCurrency].Name
              : "Выберите валюту"}
          </span>
          <ChevronRight className="absolute right-0 top-[50%] translate-y-[-50%]" />
        </Link>
        <button
          className="text-center text-[1.875rem] bg-[#F3F4F6] rounded-[10px] py-[0.7rem]"
          onClick={() => onBlockSelect("from", fromValue ?? "")}
        >
          <span className={activeBlock === "from" ? "text-[#15BB70]" : ""}>
            {fromValue}
          </span>
        </button>
      </div>
      {/* To block */}
      <div
        className={`flex flex-col gap-[0.87rem] bg-white p-[1rem] shadow-[0_0_70px_-20px_#C4C7CC] rounded-[1.25rem] `}
      >
        <Link
          to="/select"
          className="cursor-pointer flex flex-col items-start relative title p-2 rounded-lg"
          onClick={() => {
            setActiveSelection("to");
            setToCurrency(toCurrency);
          }}
        >
          <h2 className="text-[1.55rem] font-medium leading-[100%]">
            {toCurrency}
          </h2>
          <span>
            {rates && rates[toCurrency]
              ? rates[toCurrency].Name
              : "Выберите валюту"}
          </span>
          <ChevronRight className="absolute right-0 top-[50%] translate-y-[-50%]" />
        </Link>
        <button
          className="text-center text-[1.875rem] bg-[#F3F4F6] rounded-[10px] py-[0.7rem]"
          onClick={() => onBlockSelect("to", toValue ?? "")}
        >
          <span className={activeBlock === "to" ? "text-[#15BB70]" : ""}>
            {toValue}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CalcCurrency;
