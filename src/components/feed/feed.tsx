'use client';

import FeedPhotos from './feed-photos';
import React from 'react';
import Loading from '../helper/loading';
import styles from './feed.module.css';
import { Photo, photosGet } from '@/actions/photos-get';

export default function Feed({
    photos,
}: {
    photos: Photo[];
    user?: 0 | string;
}) {
    const [photosFeed, setPhotosFeed] = React.useState<Photo[]>(photos);
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [infinite, setInfinite] = React.useState<boolean>(() => {
        if (!photos) return false;
        return photos.length >= 9;
    });
    const fetching = React.useRef(false);
    const infiniteScroll = React.useCallback(() => {
        if (!infinite || fetching.current) return;

        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75) {
            fetching.current = true;
            setLoading(true);

            setPage((p) => p + 1);

            setTimeout(() => {
                fetching.current = false;
                setLoading(false);
            }, 500);
        }
    }, [infinite]);

    React.useEffect(() => {
        async function loadMore() {
            const newPhotos = await photosGet({ limit: 6, page });

            if (newPhotos.data.length === 0) {
                setInfinite(false);
                return;
            }

            setPhotosFeed(prev => [...prev, ...newPhotos.data]);
        }

        if (page > 1) loadMore();
    }, [page]);

    React.useEffect(() => {
        window.addEventListener('scroll', infiniteScroll);

        return () => {
            window.removeEventListener('scroll', infiniteScroll);
        };
    }, [infiniteScroll]);

    return (
        <div>
            <FeedPhotos photos={photosFeed} />
            <div className={styles.loadingWrapper}>
                {infinite ? loading && <Loading /> : <p>There are no more posts.</p>}
            </div>
        </div>
    );
}