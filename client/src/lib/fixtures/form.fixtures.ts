export class Input {
  constructor(
    public type: string,
    public name: string,
    public placeholder: string,
    public autocomplete: string = "off",
    public required: boolean = true,
    public className: string = "input-sm-gray",
    public id: string = name
  ) {}
}

export const registerInputs = [
  new Input("text", "firstname", "Enter your firstname", "given-name"),
  new Input("text", "lastname", "Enter your lastname", "family-name"),
  new Input(
    "text",
    "pseudo",
    "Enter your pseudo (optional)",
    "username",
    false
  ),
  new Input("email", "email", "Enter your email address", "email"),
  new Input("password", "password", "Enter your password", "new-password"),
  new Input(
    "password",
    "confirm-password",
    "Confirm your password",
    "new-password"
  ),
];
