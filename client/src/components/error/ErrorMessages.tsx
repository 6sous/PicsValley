import { ActionErrorResponse } from "../../lib/types/error-response.type";
import "./ErrorMessages.scss";

function ErrorMessages({ response }: { response: ActionErrorResponse }) {
  console.log("response", response);
  return (
    <div className="errors">
      <p className="error__title">
        <strong>{response.error}</strong>
      </p>
      <ul>
        {Array.isArray(response.message)
          ? response.message.map((messages) => {
              console.log("messages", messages);

              return messages.errors.map((error, index) => {
                console.log(error);
                return (
                  <li key={`${messages.field}-${index}`}>
                    {error.errorMessage}
                  </li>
                );
              });
            })
          : response.message}
      </ul>
    </div>
  );
}

export default ErrorMessages;
