import LandingPage from "@/components/LandingPage";
import { currentUser } from "@clerk/nextjs/server";


export default async function Homepage() {

const user = await currentUser();

  if (!user) return <LandingPage />;
}
