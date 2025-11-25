"use server";

import { Breed, Photo } from "./photos-get";

export type PhotoData = {
  photo: Photo;
  comments: Breed[];
};

export default async function photosGet(id: string) {
  const url = `https://api.thecatapi.com/v1/images/${id}`;

  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.THE_CAT_API_KEY || "",
    },
    cache: "no-store",
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Error fetching cats.");
  }

  const data = await response.json();
  return { data };
}