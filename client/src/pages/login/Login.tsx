import { Form } from "react-router-dom";
import "./Login.scss";

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
