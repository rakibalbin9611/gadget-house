import { Link, useRouteError } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import errorPic from "../../assets/Error.jpg";
const ErrorPage = () => {
  const error = useRouteError();
  const status = error?.status || 404;
  const message = error?.statusText || "Page Not Found";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-12 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <img
          src={errorPic}
          alt="404 Illustration"
          className="w-64 mx-auto mb-6"
        />

        <h1 className="text-6xl font-bold text-purple-700 mb-4">{status}</h1>
        <p className="text-xl font-semibold mb-2 text-gray-800">{message}</p>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for doesn't exist or was moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition"
        >
          <FaArrowLeft /> Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
