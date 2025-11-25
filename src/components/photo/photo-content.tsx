'use client';

import React from 'react';
import styles from './photo-content.module.css';
import Image from 'next/image';
import { Photo } from '@/actions/photos-get';

const PhotoContent = ({ data, single }: { data: Photo; single: boolean }) => {
  const breed = data.breeds?.[0];

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={data.url}
          alt={breed?.name || 'Cat Photo'}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className={styles.details}>
        <h1 className="title">{breed?.name || 'Cat Photo'}</h1>

        {breed ? (
          <ul className={styles.attributes}>
            <li>
              <strong>Origin:</strong> {breed.origin}
            </li>
            <li>
              <strong>Weight:</strong> {breed.weight?.metric} kg
            </li>
            <li>
              <strong>Life Span:</strong> {breed.life_span} years
            </li>
            <li>
              <strong>Temperament:</strong> {breed.temperament}
            </li>
          </ul>
        ) : (
          <p>No breed information available.</p>
        )}

        {breed?.description && (
          <p className={styles.description}>{breed.description}</p>
        )}
      </div>
    </div>
  );
};

export default PhotoContent;