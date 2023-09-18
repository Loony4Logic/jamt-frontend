import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const DEFAULT_ERROR_MESSAGE = "Some Error Occured";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message || DEFAULT_ERROR_MESSAGE}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
