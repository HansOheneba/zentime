import EventCard from "@/components/cards/EventCard";
import { Button } from "@/components/ui/button";
import { getEvents } from "@/server/actions/events";
import { auth } from "@clerk/nextjs/server";
import { CalendarPlus, CalendarRange } from "lucide-react";
import Link from "next/link";

export default async function EventsPage() {
  // Get the authenticated user's ID
  const { userId, redirectToSignIn } = await auth();
  // Redirect to sign-in page if user is not authenticated
  if (!userId) return redirectToSignIn();

  const events = await getEvents(userId);

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
            className="border-2 border-black bg-yellow-300 hover:bg-yellow-400 text-black font-semibold flex items-center gap-2 shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all"
          >
            <Link href="/events/new">
              <CalendarPlus className="w-5 h-5" />
              Create Event
            </Link>
          </Button>
        </div>

        {/* Show event cards if any exist, otherwise show empty state */}
        {events.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-16 py-12 border-2 border-dashed border-black rounded-xl bg-white">
            <CalendarRange className="w-12 h-12 mx-auto mb-4 text-black" />
            <p className="text-lg font-medium mb-2">
              You do not have any events yet.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Create your first event to get started!
            </p>

            <Button
              asChild
              className="w-fit border-2 border-black bg-yellow-300 hover:bg-yellow-400 text-black font-semibold flex items-center gap-2 mx-auto shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all"
            >
              <Link href="/events/new">
                <CalendarPlus className="w-4 h-4" />
                New Event
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
