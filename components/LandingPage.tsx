"use client";

import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-black font-sans flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>

      {/* Framed Content */}
      <div className="z-10 border-[5px] border-black bg-white rounded-xl shadow-[8px_8px_0_0_#000] p-4 sm:p-8 md:p-10 lg:p-20 w-full max-w-lg md:max-w-2xl flex flex-col items-center gap-8 animate-in fade-in duration-700 overflow-auto">
        {/* Logo */}
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={160}
          height={160}
          className="border-4 border-black rounded-xl shadow-lg p-4 bg-white animate-in zoom-in duration-500"
        />

        {/* Tagline Badge */}
        <span className="px-4 py-1 text-center rounded-full bg-yellow-300 border-2 border-black font-semibold tracking-wide animate-in slide-in-from-top-5 text-xs">
          Built for professionals, teams & clients
        </span>

        {/* Subtitle */}
        <p className="text-center text-gray-800 max-w-md mt-1 leading-relaxed text-sm">
          Effortlessly schedule your meetings — save time and eliminate email
          ping-pong.
        </p>

        {/* Features Section */}
        <div className="flex gap-6 mt-4 text-md max-md:flex-col max-md:items-center text-xs">
          <Feature icon="fa-calendar-check" text="Easy Booking" />
          <Feature icon="fa-clock" text="Time-Zone Smart" />
          <Feature icon="fa-shield-halved" text="Privacy First" />
        </div>
      </div>
      {/* Sign-In Section */}
      <div className="animate-in slide-in-from-bottom-5 duration-500">
        <p className="text-center my-4 font-medium text-gray-700">
          👋 Sign in to get started
        </p>

        <SignIn routing="hash" appearance={{ baseTheme: neobrutalism }} />
      </div>
    </main>
  );
}

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 border-2 border-black px-4 py-2 rounded-md bg-white shadow-sm animate-in fade-in slide-in-from-bottom-5 duration-500">
      <i className={`fa-solid ${icon} text-xl text-black`} />
      <span className="font-medium">{text}</span>
    </div>
  );
}
