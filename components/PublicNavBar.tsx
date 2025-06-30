"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export function PublicNavBar() {
  return (
    <header className="w-full border-b-4 border-black bg-white shadow-md px-4 sm:px-8 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className=""
        />
       
      </Link>

      <div className="flex gap-2">
        {/* Sign Up */}
        <SignInButton mode="modal">
          <Button variant="default" className="border-2 border-black">
            Sign Up
          </Button>
        </SignInButton>
        {/* Sign In */}
        <SignInButton mode="modal">
          <Button variant="outline" className="border-2 border-black">
            Sign In
          </Button>
        </SignInButton>
      </div>
    </header>
  );
}
