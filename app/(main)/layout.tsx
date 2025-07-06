
import { currentUser } from "@clerk/nextjs/server";
import { NavbarShell } from "@/components/NavBarShell";
import { Footer } from "@/components/footer";

export default async function({
  children,
}: {
  children: React.ReactNode;
}) {

    const user = await currentUser()
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavbarShell />
        <main className="flex-1">
          <section>{children}</section>
        </main>
        <Footer />
      </div>
    </>
  );
}