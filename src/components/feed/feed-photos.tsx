import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
    return (
        <ul className={`${styles.feed} animeLeft`}>
            {photos.map((photo, i) => (
                <li className={styles.photo} key={photo.id + i}>
                    <Link href={`/photo/${photo.id}`} scroll={false}>
                        <Image
                            src={photo.url}
                            alt={
                                photo.breeds && photo.breeds.length > 0
                                    ? photo.breeds[0].name
                                    : "Cat"
                            }
                            fill
                            sizes="(max-width: 600px) 100vw, 33vw"
                            style={{ objectFit: "cover" }}
                            priority={i < 6}
                        />
                        <span className={styles.visualizacao}>
                            {photo.breeds && photo.breeds.length > 0
                                ? photo.breeds[0].name
                                : "View"}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}