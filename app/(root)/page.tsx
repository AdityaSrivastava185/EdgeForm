import Navbar from "@/(components)/components/(Header)/Header/Navbar";
import Border from "@/(components)/(utility)/utility/Border";
import Hero from "@/(components)/components/(main)/Hero/Hero";
import Features from "@/(components)/components/(main)/FeaturesSection/Features";
import Framework from "@/(components)/components/(main)/FrameworksSection/Framework";

export default function Home() {
  return (
    <>
    <div className="relative flex flex-col items-center justify-center overflow-hidden mx-auto w-full min-h-screen">
      <div className="w-full">
        <Navbar />
        <Border />
      </div>
      <Hero/>
      <Features/>
      <Framework/>
    </div>
    </>
  );
}
