
import { currentUser } from "@clerk/nextjs/server";
import { NavbarShell } from "@/components/NavBarShell";

export default async function({
  children,
}: {
  children: React.ReactNode;
}) {

    const user = await currentUser()
  return (
    <>
      <NavbarShell />
      <main>
        <section>{children}</section>
      </main>
    </>
  );
}