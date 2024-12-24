import Home from "./components/home";
import AboutUs from "./components/about-us";
import Partners from "./components/partners";
import WhatWeDo from "./components/what-we-do";
import GetInTouch from "./components/get-in-touch";
import WhatTheyDo from "./components/what-they-do";

export default function MainPage() {
  return (
    <>
      <Home />
      <AboutUs />
      <WhatTheyDo />
      <Partners />
      <WhatWeDo />
      <GetInTouch />
    </>
  );
}
