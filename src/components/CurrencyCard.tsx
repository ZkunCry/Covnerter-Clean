import { LoaderCircle } from "lucide-react";
import { useGetValutes } from "../store/currencyStore";
import {
  useActiveSelection,
  useCurrencyActions,
} from "../store/currencySelectionStore";
import Select from "../assets/done.svg";
import {
  useFromCurrency,
  useToCurrency,
} from "../store/currencySelectionStore";
const CurrencyCard = () => {
  const valutes = useGetValutes();
  const { setFromCurrency, setToCurrency } = useCurrencyActions();
  const fromCurrency = useFromCurrency();
  const toCurrency = useToCurrency();
  const activeSelection = useActiveSelection();
  if (!valutes)
    return <LoaderCircle size={30} className="self-center animate-spin" />;

  const arrValutes = Object.values(valutes || {});
  console.log(valutes);
  return (
    <div className="flex flex-col gap-[0.75rem]">
      {arrValutes.map((valute) => {
        return (
          <button
            key={valute.ID}
            onClick={() => {
              if (activeSelection === "from") {
                setFromCurrency(valute.CharCode);
              } else {
                setToCurrency(valute.CharCode);
              }
            }}
            className="relative cursor-pointer w-full flex flex-col items-start p-[1rem] bg-white shadow-[0_0_70px_-20px_#C4C7CC] rounded-[1.25rem]"
          >
            <span className="text-[1.55rem] font-medium leading-[100%]">
              {valute.CharCode}
            </span>
            <span>{valute.Name}</span>
            {(valute.CharCode === fromCurrency ||
              valute.CharCode === toCurrency) && (
              <img
                className="absolute top-[50%] translate-y-[-50%] right-[1rem]"
                src={Select}
                alt="Выбрано"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
export default CurrencyCard;
