import { Form } from "react-router-dom";

function Login() {
  return (
    <div>
      <Form method="post" action="/login">
        <h1>Login</h1>
        <label htmlFor="email">
          Email
          <input type="email" name="username" id="email" autoComplete="email" />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
          />
        </label>
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}

export default Login;

export async function loginAction({ request }: { request: Request }) {
  const formData = Object.fromEntries(await request.formData());
  console.log(formData);

  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return response;
}
