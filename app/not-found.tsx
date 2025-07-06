import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-black p-8 border-4 border-black">
      <div className="flex flex-col items-center gap-4 max-w-xl text-center">
        <Image
          src="/assets/construction.gif"
          alt="Under Construction"
          width={200}
          height={200}
          className=" border-4 border-black bg-amber-200 font-semibold text-black transition-all duration-300 translate-x-[-4px] translate-y-[-4px] shadow-[4px_4px_0px_black] hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-[10px_10px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none rounded-md"
        />
        <h2 className="text-2xl font-semibold">
          Oops! Page Missing or Not Built Yet
        </h2>
        <p className="text-md font-medium">
          This page is either missing or still under construction as I'm
          actively developing the site. Feel free to reach out if you think it's
          an error.
        </p>
        <p className="text-sm font-mono mt-2">
          Contact:{" "}
          <a href="mailto:hansopoku360@gmail.com" className="underline">
            hansopoku360@gmail.com
          </a>
        </p>
        <Link href="/events">
          <Button
            variant={"neo"}
            className="border-4 border-black bg-white hover:bg-yellow-200 mt-4"
          >
            ← Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
