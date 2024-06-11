import { ActionFunctionArgs, redirect } from "react-router-dom";
import { ActionErrorResponse } from "../../types/error-response.type";

const authUrl = `${import.meta.env.VITE_API_URL}/auth`;

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
    });

    if (!response.ok) {
      const errorData = await response.json();
      return errorData;
    }

    return redirect(redirectPath);
  } catch (error) {
    throw { error: error };
  }
}

export async function loginAction({ request }: ActionFunctionArgs) {
  return authAction({
    request,
    endpoint: "login",
  });
}

export async function registerAction({ request }: ActionFunctionArgs) {
  return authAction({
    request,
    endpoint: "register",
    redirectPath: "/login",
  });
}
