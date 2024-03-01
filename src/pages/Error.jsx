import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  // Get the error object from react-router-dom's useRouteError hook
  const error = useRouteError();
  console.error(error); // Log the error to the console for debugging purposes

  return (
    // Container to center the content vertically and horizontally
    <div id="error-page" className="container d-flex flex-column justify-content-center align-items-center">
      {/* Main error message */}
      <h1 className="text-danger">Oops!</h1>
      {/* Error description */}
      <p className="text-center">Sorry, an unexpected error has occurred.</p>
      {/* Additional details about the error */}
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}