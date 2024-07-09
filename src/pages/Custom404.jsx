import { Link } from "react-router-dom";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-white animate-pulse">
          404
        </h1>
        <p className="text-2xl text-white mt-4">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="text-white mt-2">
          It looks like you took a wrong turn. Don&apos;t worry, it happens to
          the best of us.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-blue-500 bg-white rounded-full hover:bg-blue-100 transition duration-300 ease-in-out"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
