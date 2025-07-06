import Link from "next/link";
import { NeoButton } from "@/components/ui/neoButton";
import { currentUser } from "@clerk/nextjs/server";

export default async function Homepage() {
  const user = await currentUser();

  if (!user) {
    const LandingPage = (await import("@/components/LandingPage")).default;
    return <LandingPage />;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden font-sans text-black bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000015_1px,transparent_1px)] [background-size:18px_18px] z-0 opacity-40 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_black]">
        <h1 className="text-4xl font-bold mb-4">
          Welcome back, {user.username || user.firstName || "Friend"}!
        </h1>
        <p className="text-lg mb-6">
          We're glad to have you here. Ready to explore upcoming events?
        </p>

        <Link href="/events">
          <NeoButton className="bg-yellow-400 text-black text-sm font-bold py-2 px-5 hover:bg-yellow-300">
            Go to Events
          </NeoButton>
        </Link>
      </div>

      {/* Optional Profile Section */}
      <div className="relative z-10 mt-10 text-sm text-gray-600 text-center">
        <p>User ID: {user.id}</p>
        <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
      </div>
    </main>
  );
}
