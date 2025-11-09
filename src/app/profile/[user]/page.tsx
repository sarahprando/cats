export default async function UserProfilePage({
    params
}: {
    params: { user: string }
}) {
    return (
        <main>
            <h1>Profile: {params.user}</h1>
        </main>
    );
}
