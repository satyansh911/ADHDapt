import Image from "next/image";
import Navbar from "./Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui/FrontEnd/Sidebar";

export default function Home() {
  return (
    <div className="relative bg-black text-white">
      {/* Centered and Narrow Navbar */}
      <div className="w-full flex justify-center">
        <div className="w-[342px] pt-4">
          <Navbar />
        </div>
      </div>

      {/* Main content centered */}
      <div className="flex flex-col items-center justify-center p-8 sm:p-20 gap-16">
        <SidebarProvider>
          <div className="flex relative w-full max-w-[1200px]">
            {/* Sidebar */}
            <AppSidebar />

            {/* Sidebar trigger */}
            <SidebarTrigger className="relative -top-[115px] -left-[80px] z-10 p-2 rounded-md backdrop-blur hover:bg-white/20 transition-colors" />

            {/* Main content area */}
            <main className="flex-1 p-4 ml-4">
              {/* Add your content here */}
            </main>
          </div>
        </SidebarProvider>

        {/* Logo at the bottom */}
        <Image
          src="/logo_adhdapt.png"
          alt="ADHDapt Logo"
          width={100}
          height={100}
          className="mt-10 absolute -top-5 left-20"
        />
      </div>
    </div>
  );
}
