import { useGetValutes } from "../../data/store/currencyStore";
import { LoaderCircle } from "lucide-react";
const CurrencyCard = () => {
  const valutes = useGetValutes();
  if (!valutes)
    return <LoaderCircle size={30} className="self-center animate-spin" />;
  const arrValutes = Object.values(valutes || {});
  return (
    <div className="flex flex-col gap-[0.75rem]">
      {arrValutes.map((valutes, key) => {
        return (
          <button className="w-full  flex flex-col items-start p-[1rem] bg-white shadow-[0_0_70px_-20px_#C4C7CC] rounded-[1.25rem] ">
            <span className="text-[1.55rem] font-medium leading-[100%]">
              {valutes.CharCode}
            </span>
            <span>{valutes.Name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CurrencyCard;
