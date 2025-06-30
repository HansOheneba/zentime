import { currentUser } from "@clerk/nextjs/server";

export default async function({
  children,
}: {
  children: React.ReactNode;
}) {

    const user = await currentUser()
  return (
    <main>
        {user ? <privateNavBar/> : <publicNavBar/>}
      <section>{children}</section>
    </main>
  );
}