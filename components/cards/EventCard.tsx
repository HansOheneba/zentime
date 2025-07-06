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
        "flex flex-col border-4 border-black bg-white shadow-[4px_4px_0_0_#000] rounded-xl",
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
            className="border-2 border-black px-4 py-2 font-semibold text-black transition-all duration-300 translate-x-[-4px] translate-y-[-4px] shadow-[4px_4px_0px_black] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none rounded-md"
          />
        )}
        <Button
        variant={"neo"}
          asChild
          className="bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0_0_#000] hover:bg-yellow-400"
        >
          <Link href={`/events/${id}/edit`}>Edit</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
