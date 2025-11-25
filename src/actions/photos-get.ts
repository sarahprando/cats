"use server";

export type Breed = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  description: string;
  life_span?: string;
  weight?: {
    metric: string;
  };
};

export type Photo = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: Breed[];
};

export async function photosGet({
  breedId,
  page = 0,
  limit = 9
}: {
  breedId?: string;
  page?: number;
  limit?: number;
}) {
  const base = `https://api.thecatapi.com/v1/images/search`;
  const params = new URLSearchParams({
    limit: String(limit),
    page: String(page),
    order: "ASC",
    has_breeds: "true",
  });

  if (breedId) {
    params.append("breed_ids", breedId);
  }

  const url = `${base}?${params.toString()}`;

  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.THE_CAT_API_KEY || "",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Error fetching cats.");
  }

  const data = (await response.json()) as Photo[];

  return { data };
}
