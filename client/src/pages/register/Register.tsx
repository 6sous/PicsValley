import { ActionFunctionArgs, Form, useActionData } from "react-router-dom";
import { registerInputs } from "../../lib/fixtures/form.fixtures";
import "./Register.scss";

function Register() {
  const responseFromAction = useActionData();

  console.log(responseFromAction);

  return (
    <Form id="register-form" method="post" action="/register">
      {registerInputs.map((input) => (
        <label
          key={input.name}
          htmlFor={input.name}
          className={input.className}>
          <p>{input.name}</p>
          <input
            key={input.name}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            id={input.id}
            autoComplete={input.autocomplete}
          />
        </label>
      ))}

      <button className="button-sm-everglade-fullfilled" type="submit">
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
