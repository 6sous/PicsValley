import { ActionFunctionArgs, redirect } from "react-router-dom";
import { ActionErrorResponse } from "../../types/error-response.type";

export async function registerAction({
  request,
}: ActionFunctionArgs): Promise<ActionErrorResponse | Response> {
  try {
    const formData = Object.fromEntries(await request.formData());
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return errorData;
    }

    return redirect("/login");
  } catch (error) {
    throw { error: error };
  }
}
