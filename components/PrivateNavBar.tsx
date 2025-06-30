"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { PrivateNavLinks } from "@/constants";

export function PrivateNavBar() {
  const pathname = usePathname(); // ✅ Safe now

  return (
    <header className="w-full border-b-4 border-black bg-white shadow-md px-4 sm:px-8 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className=""
        />
    
      </Link>

      <nav className="hidden md:flex gap-4 items-center">
        {PrivateNavLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`flex items-center gap-2 text-sm font-medium px-3 py-1.5 border-2 rounded-md transition
                ${
                  isActive
                    ? "bg-yellow-300 border-black text-black"
                    : "bg-white border-black hover:bg-yellow-100"
                }
              `}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={16}
                height={16}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="ml-4">
        <UserButton />
      </div>
    </header>
  );
}
