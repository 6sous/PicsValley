import { ActionErrorResponse } from "../../lib/types/error-response.type";
import "./ErrorMessages.scss";

function ErrorMessages({ response }: { response: ActionErrorResponse }) {
  console.log(response);
  return (
    <div className="errors-hint">
      <ul>
        {response.message.flatMap((messages) =>
          messages.errors.map((error, index) => (
            <li key={`${messages.field}-${index}`}>{error}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ErrorMessages;
