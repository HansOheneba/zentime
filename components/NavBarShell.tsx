"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { PublicNavBar } from "./PublicNavBar";
import { PrivateNavBar } from "./PrivateNavBar";

export function NavbarShell() {
  return (
    <>
      <SignedIn>
        <PrivateNavBar />
      </SignedIn>

      <SignedOut>
        <PublicNavBar />
      </SignedOut>
    </>
  );
}
