import Navbar from "@/components/(Header)/Header/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="relative flex flex-col items-center justify-center overflow-hidden sm:px-10 px-5 mx-auto w-full">
    <div className="max-w-7xl w-full">
      <Navbar/>
    </div>
   </div>
  );
}
