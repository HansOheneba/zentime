

import EventForm from "@/components/forms/EventForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewEventPage() {
  return (
    <div className="p-5">
      <Card className="max-w-2xl mx-auto mt-10 bg-white py-6 md:p-10 rounded-xl border-3 border-black shadow-[4px_4px_0_0_#000] animate-fade animation-duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold border-b-4 border-black pb-1 w-fit">
            Create A New Event
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EventForm />
        </CardContent>
      </Card>
    </div>
  );
}

// className="flex flex-col gap-6  max-w-2xl mx-auto"