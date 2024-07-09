import { Button } from "../components/ui/button";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center p-5">
      <div className="font-bold text-gray-700">
        <h2>404</h2>
        <h3>UH OH! You're lost.</h3>
        <p className="p-3 text-gray-500">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>

        <NavLink to="/">
          <Button>Go Back to Home</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
