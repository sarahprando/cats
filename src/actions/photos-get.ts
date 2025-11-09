"use server";

export type Breed = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  description: string;
};

export type Photo = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: Breed[];
};

export default async function photosGet() {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=12",
    {
      headers: {
        "x-api-key": process.env.THE_CAT_API_KEY || "",
      },
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching cats.");
  }

  const data = (await response.json()) as Photo[];
  return data;
}
