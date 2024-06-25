import { Form, useActionData } from "react-router-dom";
import { loginInputs, registerInputs } from "../../lib/fixtures/form.fixtures";
import { ActionErrorResponse } from "../../lib/types/error-response.type";
import ErrorMessages from "../../components/error/ErrorMessages";
import logo from "../../assets/logo-vertical.svg";
import "./Auth.scss";
import { Link } from "react-router-dom";

type authPage = "login" | "register";

function Auth({ page }: { page: authPage }) {
  const authActionResponse = useActionData() as ActionErrorResponse;

  const inputsArray = page === "login" ? loginInputs : registerInputs;

  return (
    <div className="auth-page">
      <Form id="auth-form" method="post" action={`/${page}`}>
        <img src={logo} alt="Picsvalley brand logo" className="logo" />
        {inputsArray.map((input) => (
          <label key={input.name} htmlFor={input.name} className="input">
            <span>{input.name}</span>
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

        {page === "login" && (
          <button className="forgot-password-button">Forgot password ?</button>
        )}

        <button className="submit-button" type="submit">
          {inputsArray === registerInputs ? "Register" : "Login"}
        </button>

        {authActionResponse && <ErrorMessages response={authActionResponse} />}

        <p className="auth-link">
          {page === "register" ? (
            <>
              Already have an account ? <Link to="/login">Login</Link>
            </>
          ) : (
            <>
              Don't have an account ? <Link to="/register">Register</Link>
            </>
          )}
        </p>
      </Form>
    </div>
  );
}

export default Auth;
