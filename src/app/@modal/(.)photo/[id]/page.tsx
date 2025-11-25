import photoGet from '@/actions/photo-get';
import FeedModal from '@/components/feed/feed-modal';
import { notFound } from 'next/navigation';

type PhotoIdParams = {
    params: { id: string };
};

export async function generateMetadata({ params }: PhotoIdParams) {
    const { data } = await photoGet(params.id);

    if (!data) return { title: "Cat Photo" };

    const title =
        data?.breeds?.[0]?.name ||
        "Cat Photo";

    return { title };
}

export default async function PhotoIdPage({ params }: PhotoIdParams) {
    const { data } = await photoGet(params.id);

    if (!data) return notFound();

    return <FeedModal photo={data} />;
}