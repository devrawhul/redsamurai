import HeroSec from "./HeroSec";
import AboutSec from "./AboutSec";
import ProjectsSec from "./ProjectsSec";
import ServicesSec from "./ServicesSec";

import Footer from "./Footer";

function Home() {
  return (
    <main className=" text-white/85 sm:mt mt-20">
      <HeroSec />
      <AboutSec />
      <ProjectsSec />
      <ServicesSec />
      <Footer />
    </main>
  );
}

export default Home;
