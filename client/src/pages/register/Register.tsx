import { ActionFunctionArgs, Form } from "react-router-dom";

function Register() {
  return (
    <Form method="post" action="/register">
      <h1>Register</h1>
      <label className="input-sm-gray" htmlFor="firstname">
        <p>Firstname</p>
        <input name="firstname" type="text" id="firstname" />
      </label>

      <label className="input-sm-gray" htmlFor="lastname">
        <p>Lastname</p>
        <input name="lastname" type="text" id="lastname" />
      </label>

      <label className="input-sm-gray" htmlFor="pseudo">
        <p>Pseudo</p>
        <input name="pseudo" type="text" id="pseudo" />
      </label>

      <label className="input-sm-gray" htmlFor="email">
        <p>Email</p>
        <input name="email" type="email" id="email" />
      </label>

      <label className="input-sm-gray" htmlFor="password">
        <p>Password</p>
        <input name="password" type="password" id="password" />
      </label>

      <button className="button-sm-everglade-outlined" type="submit">
        Register
      </button>
    </Form>
  );
}

export default Register;

export async function registerAction({ request }: ActionFunctionArgs) {
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

  return response;
}
