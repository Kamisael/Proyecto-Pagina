import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from './Auth';


const PublicRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Navigate to="/foods" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
