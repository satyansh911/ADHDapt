import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="relative">
      {/* Centered and Narrow Navbar */}
      <div className="w-full flex justify-center">
        <div className="w-[342px] pt-10">
          <Navbar />
        </div>
      </div>
        <Image
          src="/logo_adhdapt.png"
          alt="ADHDapt Logo"
          width={100}
          height={100}
          className="mt-10 relative -top-[100px] left-[5px]"
        />
      
    </div>
  );
}
