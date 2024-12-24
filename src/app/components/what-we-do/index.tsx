const itemsRow1 = ["RO", "UV", "STP", "MB", "PDS"];
const itemsRow2 = ["UF", "Pre-Fil", "DM/DI", "EDI", "Softener"];

export default function WhatWeDo() {
  return (
    <div id="what-we-do" className="bg-yellow-400">
      <div className="mx-auto max-w-screen-2xl p-36 h-svh">
        <div className=" relative grid grid-cols-5 p-12 h-full">
          <div className="flex flex-col col-span-3 items-start">
            <p className="text-7xl font-extralight">What We Do</p>
            <p className="text-white mt-12">
              SHS provides turn-key water treatment solutions for various
              industrial and commercial applications. Our solutions include:
            </p>
          </div>
          <div className="flex flex-col items-center col-span-2 align-stretch">
            <p className="text-3xl font-black mb-12">Our Applications</p>
            <div className="w-full h-full px-14">
              <div className="bg-white shadow-lg w-full h-full grid grid-cols-2 p-4">
                <div className="flex flex-col grid-rows-5 gap-5">
                  {itemsRow1.map((i, index) => (
                    <div key={index} className="text-black">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col grid-rows-5 gap-4 mt-5">
                  {itemsRow2.map((i, index) => (
                    <div key={index + 5} className="text-black">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
