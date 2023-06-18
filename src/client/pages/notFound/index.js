import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h3>
        <h1>Unexpected error occurred</h1>

        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </h3>
    </>
  );
}
