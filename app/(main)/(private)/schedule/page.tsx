import { ScheduleForm } from "@/components/forms/ScheduleForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSchedule } from "@/server/actions/schedule";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// Default export function for the SchedulePage component
export default async function SchedulePage() {
  // Check if the user is authenticated (using Clerk authentication)
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn(); // Redirect to sign-in page if user is not authenticated

  // Query the database to fetch the user's schedule based on the authenticated user
  const schedule = await getSchedule(userId);

  return (
    <div className="p-5">
      <Card className="max-w-2xl mx-auto mt-10 bg-white py-6 md:p-10 rounded-xl border-3 border-black shadow-[4px_4px_0_0_#000] animate-fade animation-duration-300">
        <CardHeader>
          <CardTitle>Schedule</CardTitle> {/* Display title for the page */}
        </CardHeader>
        <CardContent>
          <ScheduleForm schedule={schedule} />
          {/* Render the ScheduleForm component with the fetched schedule */}
        </CardContent>
      </Card>
    </div>
  );
}
