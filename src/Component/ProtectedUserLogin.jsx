import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedUserLogin = ({ children, ...rest }) => {
  const [auth, setAuth] = React.useState(true);
  React.useMemo(() => {
    if (localStorage.getItem("token")) {
      setAuth(false);
    }
  }, [auth]);

  return (
    <div>
      {/* REDIRECT KE HOME KLO DAH LOGIN */}
      <Route {...rest}>{auth ? children : <Redirect to="/" />}</Route>
    </div>
  );
};

export default ProtectedUserLogin;
