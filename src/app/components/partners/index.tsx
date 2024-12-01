import Image from "next/image";

export default function Partners() {
  const images = [
    { src: "/partner-logos/i-1.png", name: "" },
    { src: "/partner-logos/i-2.jpg", name: "" },
    { src: "/partner-logos/i-3.png", name: "" },
    { src: "/partner-logos/i-4.png", name: "" },
    { src: "/partner-logos/i-5.jpg", name: "" },
    { src: "/partner-logos/i-6.jpg", name: "" },
    { src: "/partner-logos/i-7.jpg", name: "" },
    { src: "/partner-logos/i-8.jpg", name: "" },
    { src: "/partner-logos/i-9.png", name: "" },
    { src: "/partner-logos/i-10.jpg", name: "" },
    { src: "/partner-logos/i-11.jpg", name: "" },
    { src: "/partner-logos/i-12.jpg", name: "" },
    { src: "/partner-logos/i-13.jpg", name: "" },
    { src: "/partner-logos/i-14.jpg", name: "" },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 py-8">
        <div
          x-data="{}"
          x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {images.map((i, index) => (
              <li key={index}>
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
                  <Image src={i.src} alt={i.name} width={100} height={100} />
                </div>
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {images.map((i, index) => (
              <li key={index}>
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
                  <Image src={i.src} alt={i.name} width={100} height={100} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
