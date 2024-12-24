import Image from "next/image";

export default function Home() {
  return (
    <div id="home" className="">
      <div className="mx-auto max-w-screen-2xl">
        <div className="relative h-svh">
          <Image
            src="/water.gif"
            alt="logo"
            //   width={100}
            //   height={500}
            fill={true}
            unoptimized
          />
          <div className="flex items-center justify-center absolute inset-0 z-10 text-white text-center font-black text-3xl ">
            Water Services from SHS with the Quote
          </div>
        </div>
      </div>
    </div>
  );
}
