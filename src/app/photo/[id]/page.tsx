export default async function PhotoIdPage({
    params,
}: {
    params: { id: number }
} ) {
    return (
        <main>
            <h1>Photo Id: {params.id}</h1>
        </main>
    )
}