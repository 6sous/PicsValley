import { Form, useActionData } from "react-router-dom";
import { registerInputs } from "../../lib/fixtures/form.fixtures";
import "./Register.scss";
import { ActionErrorResponse } from "../../lib/types/error-response.type";
import ErrorMessages from "../../components/error/ErrorMessages";

function Register() {
  const registerActionResponse = useActionData() as ActionErrorResponse;

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
      {registerActionResponse && (
        <ErrorMessages response={registerActionResponse} />
      )}
    </Form>
  );
}

export default Register;
