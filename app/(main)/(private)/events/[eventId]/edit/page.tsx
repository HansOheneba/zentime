export default async function EditEventPage({
    params,
}: {
    params: Promise<{eventId: string;}>
}){

const {userId, redirectToSignIn} = await auth();
if (!userId) {
    return redirectToSignIn();
}

}