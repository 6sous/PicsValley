import { ActionFunctionArgs, redirect } from "react-router-dom";
import { ActionErrorResponse } from "../../types/error-response.type";

export const authUrl = `${import.meta.env.VITE_API_URL}/auth`;

export async function authAction({
  request,
  endpoint,
  redirectPath = "/",
}: {
  request: Request;
  endpoint: string;
  redirectPath?: string;
}): Promise<ActionErrorResponse | Response> {
  const formData = Object.fromEntries(await request.formData());

  try {
    const response = await fetch(`${authUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      return errorData;
    }

    const responseData = await response.json();

    if (endpoint === "login") {
      localStorage.setItem("user", JSON.stringify(responseData.data));
    }

    return redirect(redirectPath);
  } catch (error) {
    throw { error: error };
  }
}

export async function login({ request }: ActionFunctionArgs) {
  return authAction({
    request,
    endpoint: "login",
  });
}

export async function register({ request }: ActionFunctionArgs) {
  return authAction({
    request,
    endpoint: "register",
    redirectPath: "/login",
  });
}

export async function logout() {
  try {
    const response = await fetch(`${authUrl}/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    localStorage.removeItem("user");

    return response;
  } catch (error) {
    throw { error: error };
  }
}
