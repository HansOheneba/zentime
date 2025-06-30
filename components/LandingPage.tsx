"use client";

import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 relative overflow-hidden font-sans text-black bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000015_1px,transparent_1px)] [background-size:18px_18px] z-0 opacity-40 pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="z-10 border-[3px] border-black bg-white rounded-xl shadow-[8px_8px_0_0_#000] p-6 sm:p-10 lg:p-16 w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20">
        {/* Left Side: Logo and Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-md">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={160}
            height={160}
            className="animate-in zoom-in duration-500"
          />

          <span className="px-4 py-1 rounded-full bg-yellow-300 border-2 border-black font-semibold tracking-wide animate-in slide-in-from-top-5 text-xs">
            Built for professionals, teams & clients
          </span>

          <p className="text-gray-800 leading-relaxed text-sm">
            Effortlessly schedule your meetings — save time and eliminate email
            ping-pong.
          </p>

          <div className="flex gap-4 mt-2 text-xs flex-wrap justify-center lg:justify-start">
            <Feature icon="fa-calendar-check" text="Easy Booking" />
            <Feature icon="fa-clock" text="Time-Zone Smart" />
            <Feature icon="fa-shield-halved" text="Privacy First" />
          </div>
        </div>

        {/* Right Side: Sign In */}
        <div className="w-full max-w-md">
          <p className="text-center my-4 font-medium text-gray-700">
            👋 Sign in to get started
          </p>
          <SignIn routing="hash" appearance={{ baseTheme: neobrutalism }} />
        </div>
      </div>
    </main>
  );
}

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 border-2 border-black px-3 py-1.5 rounded-md bg-white shadow-sm animate-in fade-in slide-in-from-bottom-5 duration-500">
      <i className={`fa-solid ${icon} text-base text-black`} />
      <span className="font-medium">{text}</span>
    </div>
  );
}
