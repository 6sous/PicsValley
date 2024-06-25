import { UserType } from "../../types/user.type";

export async function getUserProfile(): Promise<UserType> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/profile`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const user: UserType = await response.json();

    return user;
  } catch (error) {
    throw { error: error };
  }
}
