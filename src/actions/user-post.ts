"use server";

import { USER_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import login from "./login";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !email || !password) throw new Error("Please fill in all fields.");
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Email or username already registered.");
    await response.json();
    const {ok} = await login({ok: true, error: ''}, formData);
    if(!ok) throw new Error("Error logging in after registration.");
    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
