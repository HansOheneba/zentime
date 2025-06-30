"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { PrivateNavLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";

export default function PrivateNavBar() {
  const pathname = usePathname();

  return (
    <div className="px-5 py-2">
      <header className="w-full rounded-md border-2 border-black bg-white shadow-[4px_4px_0_0_#000] px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto ">
          {/* Logo */}
          <Link href="/events" className="flex items-center gap-2">
            <Image src="/assets/logoNav.png" alt="Logo" width={30} height={30} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            {PrivateNavLinks.map((item) => {
              const isActive =
                pathname === item.route ||
                pathname.startsWith(`${item.route}/`);
              return (
                <Link
                  key={item.route}
                  href={item.route}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold border-2 transition-all ${
                    isActive
                      ? "bg-yellow-300 text-black border-black shadow-[3px_3px_0_0_#000]"
                      : "border-transparent text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden md:block">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox:
                    "border-2 border-black shadow-[2px_2px_0_0_#000] rounded-full",
                },
              }}
            />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="border-2 border-black shadow-[3px_3px_0_0_#000] p-2"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-64 bg-white p-6 border-l-4 border-black shadow-[6px_0_0_0_#000]"
              >
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                <div className="flex flex-col gap-4 mt-8">
                  {PrivateNavLinks.map((item) => {
                    const isActive =
                      pathname === item.route ||
                      pathname.startsWith(`${item.route}/`);
                    return (
                      <Link
                        key={item.route}
                        href={item.route}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold border-2 transition-all ${
                          isActive
                            ? "bg-yellow-300 text-black border-black shadow-[3px_3px_0_0_#000]"
                            : "border-transparent text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-8 border-t border-black pt-6">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          "border-2 border-black shadow-[2px_2px_0_0_#000] rounded-full",
                      },
                    }}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
