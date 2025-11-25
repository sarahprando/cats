"use server";

export type ImageLabel = {
  Name: string;
  Confidence: number;
};

export type AnalysisData = {
  labels: ImageLabel[];
};

export async function statsGet(imageId: string) {
  if (!imageId) throw new Error("Image ID is required.");

  const url = `https://api.thecatapi.com/v1/images/${imageId}/analysis`;

  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.THE_CAT_API_KEY || "",
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) throw new Error("Error fetching analysis data.");

  const json = await response.json();

  // The endpoint returns an array with 1 item
  const analysis = json[0]?.labels || [];

  return { data: analysis };
}