import Keypad from "../components/KeyPad";
import { ChevronRight } from "lucide-react";
const Converter = () => {
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
              <div className="flex bg-white p-[1rem]  shadow-[0_0_70px_-20px_#C4C7CC] rounded-[1.25rem] flex-col">
                <button className="cursor-pointer flex flex-col items-start relative title">
                  <h2 className="text-[1.55rem] font-medium leading-[100%]">
                    USD
                  </h2>
                  <span>Российский рубль</span>
                  <ChevronRight className="absolute right-0 top-[50%] translate-y-[-50%]" />
                </button>
              </div>
              <Keypad />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Converter;
