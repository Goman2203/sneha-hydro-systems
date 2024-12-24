import Image from "next/image";
export default function WhatTheyDo() {
  return (
    <div id="about-us-2" className="bg-yellow">
      <div className="mx-auto max-w-screen-2xl">
        <div className="relative grid grid-cols-2 h-svh p-36 gap-36">
          <div className="flex flex-col items-start justify-content-center pt-12">
            <p className="text-md font-black mb-3">
              Transforming industrial water treatment
            </p>
            <p className="text-3xl font-extralight mb-5">
              INNOVATIVE WATER SOLUTIONS
            </p>
            <p className="text-md text-slate-500 tracking-wide">
              At SHS, we specialize in advanced industrial water treatment
              solutions designed to empower businesses and optimize their
              operations. Based in [location], our dedicated team is committed
              to delivering highly efficient and reliable water treatment
              systems, meticulously tailored to meet the distinct needs of
              diverse industries. We prioritize cutting-edge innovation and
              strict compliance with regulatory standards, ensuring our clients
              achieve peak performance while maintaining a strong commitment to
              environmental sustainability. Partner with SHS to revolutionize
              your water treatment processes and propel your success to new
              heights.
            </p>
          </div>
          <div
            className="flex flex-col grid-rows-2 gap-8 pt-16"
            style={{ position: "relative" }}
          >
            <div>
              <div>
                <p className="text-3xl font-extralight mb-5">INNOVATIVE</p>
                <p className="text-md text-slate-500 tracking-wide w-9/12">
                  At SHS, we specialize in advanced industrial water treatment
                  solutions designed to empower businesses and optimize their
                  operations.
                </p>
              </div>
            </div>
            <div className="grid justify-items-end">
              <div className="w-8/12">
                <p className="text-3xl font-extralight mt-12">INNOVATIVE</p>
                <p className="text-md text-slate-500 tracking-wide mt-4">
                  At SHS, we specialize in advanced industrial water treatment
                  solutions designed to empower businesses and optimize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
