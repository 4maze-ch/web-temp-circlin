import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-[#EBE3FF] font-poppins">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto text-[#0C0D0C]">
        <div className="mb-8 animate-fadeIn hover:scale-105 transition-transform duration-300">
          <Suspense fallback={<div className="h-[100px] w-[500px] bg-gray-200 rounded"></div>}>
            <Image
              src="/circlin-logo-colorful.svg"
              alt="Circlin Logo"
              width={500}
              height={100}
              priority
              className="drop-shadow-[0_4px_6px_rgba(124,58,237,0.15)]"
            />
          </Suspense>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mt-6 mb-6 animate-fadeIn animation-delay-300 leading-relaxed text-[#0C0D0C]">
          Trust what&apos;s tried.
          <br />
          Choose secondhand.
        </h1>
        <p className="text-lg md:text-xl max-w-md animate-fadeIn animation-delay-500 font-light text-[#0C0D0C]/80">
          Why buy new when the best pieces are already out there?
        </p>
      </main>
    </div>
  );
}
