import Navbar from "@/(components)/components/(Header)/Header/Navbar";
import Border from "@/(components)/(utility)/utility/Border";
import Image from "next/image";

export default function Home() {
  return (
   <div className="relative flex flex-col items-center justify-center overflow-hidden mx-auto w-full">
    
    <div className="w-full">
      
      
      <Navbar/>
      <Border/>
    </div>
   </div>
  );
}
