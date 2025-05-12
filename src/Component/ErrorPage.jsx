// src/Component/ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-red-600">Oops!</h1>
      <p className="text-gray-600 mt-4">Something went wrong.</p>
      <pre className="text-sm text-gray-400 mt-2">
        {error.statusText || error.message}
      </pre>
    </div>
  );
};

export default ErrorPage;
