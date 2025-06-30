"use client";

import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  return (
    <section className="min-h-screen px-6 py-12 bg-[#fafafa] text-black">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Headline */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold border-b-4 border-black pb-1">
            My Events
          </h1>

          <Button
            asChild
            className="border-2 border-black bg-yellow-300 hover:bg-yellow-400 text-black font-semibold flex items-center gap-2 shadow-[4px_4px_0_0_#000]"
          >
            <Link href="/events/create">
              <CalendarPlus className="w-5 h-5" />
              Create Event
            </Link>
          </Button>
        </div>

        {/* Empty State */}
        <div className="text-center mt-16 py-12 border-2 border-dashed border-black rounded-xl bg-white">
          <p className="text-lg font-medium mb-2">No events yet.</p>
          <p className="text-sm text-gray-600 mb-6">
            Start by creating your first event.
          </p>

          <Button
            asChild
            className="w-fit border-2 border-black bg-white hover:bg-yellow-100 text-black font-semibold flex items-center gap-2 mx-auto"
          >
            <Link href="/events/new">
              <CalendarPlus className="w-4 h-4" />
              New Event
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
