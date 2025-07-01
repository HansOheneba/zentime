import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { formatEventDescription } from "@/lib/formatters";
import { Button } from "../ui/button";
import Link from "next/link";
import { CopyEventButton } from "../CopyEventButton";

// Type definition for event card props
type EventCardProps = {
  id: string;
  isActive: boolean;
  name: string;
  description: string | null;
  durationInMinutes: number;
  clerkUserId: string;
};

// Neo-brutalism styled event card component
export default function EventCard({
  id,
  isActive,
  name,
  description,
  durationInMinutes,
  clerkUserId,
}: EventCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col border-4 border-black bg-white shadow-[6px_6px_0_0_#000] transition-transform hover:scale-[1.02] rounded-xl",
        !isActive && "bg-gray-100 opacity-70"
      )}
    >
      <CardHeader>
        <CardTitle className="text-lg font-extrabold text-black">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {formatEventDescription(durationInMinutes)}
        </CardDescription>
      </CardHeader>

      {description && (
        <CardContent>
          <p className="text-sm text-gray-800">{description}</p>
        </CardContent>
      )}

      <CardFooter className="flex justify-end gap-2 mt-auto">
        {isActive && (
          <CopyEventButton
            variant="outline"
            eventId={id}
            clerkUserId={clerkUserId}
            className="border-2 border-black shadow-[2px_2px_0_0_#000] hover:bg-gray-200"
          />
        )}
        <Button
          asChild
          className="bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0_0_#000] hover:bg-yellow-400"
        >
          <Link href={`/events/${id}/edit`}>Edit</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
