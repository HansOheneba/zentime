import EventForm from "@/components/forms/EventForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getEvent } from "@/server/actions/events";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function EditEventPage({
  params,
}: {
  params: { eventId: string };
}) {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();

  const { eventId } = params;

  const event = await getEvent(userId, eventId);
  if (!event)
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <div className="max-w-md border-4 border-black bg-white p-8 rounded-xl shadow-[6px_6px_0_0_#000] animate-fade-in-down">
          <h1 className="text-4xl font-extrabold mb-4 text-black">Uh OHH!</h1>
          <p className="text-sm text-gray-800 mb-6">
            We couldn’t find the event you’re looking for. It may have been
            deleted or you don’t have access to view it.
          </p>
          <Link href={"/events"}>
            <Button variant={"neo"} className="bg-amber-300 font-bold">
              Go back to Events
            </Button>
          </Link>
        </div>
      </div>
    );
  return (
    <Card className="max-w-2xl mx-auto mt-10 bg-white py-6 md:p-10 rounded-xl border-3 border-black shadow-[4px_4px_0_0_#000] animate-fade animation-duration-300">
      <CardHeader>
        <CardTitle />
      </CardHeader>
      <CardContent>
        <EventForm
          event={{ ...event, description: event.description || undefined }}
        />
      </CardContent>
    </Card>
  );
}
