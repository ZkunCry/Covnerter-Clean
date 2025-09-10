import { useState } from "react";
import { useGetValutes } from "@/store/currencyStore";
import CalcCurrency from "@/components/CalcCurrency";
import Keypad from "@/components/KeyPad";
import { LoaderCircle } from "lucide-react";

const Converter = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [activeBlock, setActiveBlock] = useState<"from" | "to">("from");

  const rates = useGetValutes();
  if (rates === null)
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <LoaderCircle size={50} className=" animate-spin self-center" />
      </div>
    );
  const handleKeyPress = (value: string) => {
    switch (value) {
      case "AC":
        setInputValue("");
        break;
      case "CE":
        setInputValue((prev) => prev.slice(0, -1));
        break;
      case ",":
        setInputValue((prev) => {
          if (prev.includes(",")) return prev;
          return prev === "" ? "0," : prev + ",";
        });

        break;
      default:
        setInputValue((prev) => {
          if (prev === "0" && value !== ",") return value;
          return prev + value;
        });
        break;
    }
  };
  const handleBlockSelect = (
    block: "from" | "to",
    currentDisplayedValue: string
  ) => {
    setActiveBlock(block);
    setInputValue(currentDisplayedValue);
  };
  return (
    <div className="w-full flex flex-col gap-[2px]">
      <header className="w-full py-4">
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-center">
            <h1 className="text-[1.25rem] font-medium">Конвертер валют</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="flex flex-col">
          <div className="container mx-auto px-1">
            <div className="flex flex-col gap-[2.5rem]">
              <CalcCurrency
                inputValue={inputValue}
                activeBlock={activeBlock}
                onBlockSelect={handleBlockSelect}
              />

              <Keypad onKeyPress={handleKeyPress} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Converter;
