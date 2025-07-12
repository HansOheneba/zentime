import { getEvent } from "@/server/actions/events";
import { clerkClient } from "@clerk/nextjs/server";
import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  Clock,
  User,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate, formatTimeString } from "@/lib/formatters";

export default async function BookingSuccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ clerkUserId: string; eventId: string }>;
  searchParams: Promise<{ startTime?: string }>;
}) {
  const { clerkUserId, eventId } = await params;
  const { startTime } = await searchParams;

  const event = await getEvent(clerkUserId, eventId);
  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 font-mono">
        <div className="bg-red-200 border-[3px] border-black text-black px-4 py-3 shadow-[4px_4px_0_#000]">
          <AlertTriangle className="inline w-5 h-5 mr-2" />
          This event doesn't exist anymore.
        </div>
      </div>
    );
  }

  const client = await clerkClient();
  const hostUser = await client.users.getUser(clerkUserId);

  let meetingStartTime: Date | null = null;
  if (startTime) {
    try {
      meetingStartTime = new Date(startTime);
    } catch (error) {
      console.error("Error parsing start time:", error);
    }
  }

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-3xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-20 h-20 bg-green-300 border-[3px] border-black flex items-center justify-center mb-4 shadow-[4px_4px_0_#000]">
            <CheckCircle className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-4xl font-extrabold uppercase mb-2 tracking-wider">
            Booking Confirmed!
          </h1>
          <p className="text-md">
            Your meeting has been successfully scheduled
          </p>
        </div>

        {/* Meeting Details */}
        <Card className="mb-8 border-[3px] border-black shadow-[4px_4px_0_#000] bg-white">
          <CardHeader className="bg-gray-200 border-b-[3px] border-black">
            <CardTitle className="text-2xl flex items-center gap-2 font-bold uppercase">
              <Calendar className="w-6 h-6" />
              Meeting Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-300 border-[2px] border-black flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{event.name}</h3>
                  {event.description && (
                    <p className="text-sm">{event.description}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-300 border-[2px] border-black flex items-center justify-center">
                  <User className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-medium">Host: {hostUser.fullName}</p>
                  <p className="text-sm">
                    {hostUser.emailAddresses[0]?.emailAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-300 border-[2px] border-black flex items-center justify-center">
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-medium">
                    Duration: {event.durationInMinutes} minutes
                  </p>
                </div>
              </div>

              {meetingStartTime && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-300 border-[2px] border-black flex items-center justify-center">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {formatDate(meetingStartTime)} at{" "}
                      {formatTimeString(meetingStartTime)}
                    </p>
                    <p className="text-sm">
                      {Intl.DateTimeFormat().resolvedOptions().timeZone}{" "}
                      timezone
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <Card className="mb-8 border-[3px] border-black shadow-[4px_4px_0_#000] bg-white">
          <CardHeader className="bg-gray-200 border-b-[3px] border-black">
            <CardTitle className="text-xl font-bold uppercase">
              What's Next?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {[
              {
                title: "Calendar Event Created",
                desc: `The meeting has been automatically added to ${hostUser.fullName}'s calendar`,
              },
              {
                title: "Confirmation Email",
                desc: "You should receive a confirmation email shortly with all the meeting details",
              },
              {
                title: "Meeting Reminders",
                desc: "Both you and the host will receive reminders before the meeting",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-8 border-[3px] border-yellow-500 bg-yellow-200 shadow-[4px_4px_0_#000]">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-yellow-300 border-[2px] border-black flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-bold uppercase mb-2">Important Notes</h3>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>Make sure you have the correct meeting time</li>
                  <li>Contact the host if you need to reschedule</li>
                  <li>Check your email for meeting links</li>
                  <li>Save the host's contact for later</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-black hover:bg-white hover:text-black text-white border-[3px] border-black px-8 py-3 shadow-[4px_4px_0_#000] uppercase font-bold tracking-wider"
          >
            <Link href={`/book/${clerkUserId}`}>Book Another</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-[3px] border-black px-8 py-3 shadow-[4px_4px_0_#000] bg-white text-black hover:bg-gray-100 uppercase font-bold tracking-wider"
          >
            <Link href="/">Return Home</Link>
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm">
          Need help? Contact{" "}
          <a
            href="mailto:hansoheneba.io@gmail.com"
            className="underline font-bold hover:text-blue-600"
          >
            hansoheneba.io@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
