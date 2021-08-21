import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { Home, Order } from "../Pages";

function PrivateRoute({ children, ...rest }) {
  const authDetails = useSelector((state) => state.auth.authDetails);
  return (
    <Route
      {...rest}
      render={(props) =>
        authDetails != null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function AfterLogin() {
  return <Switch></Switch>;
}

export default function Routes() {
  // const authDetails = useSelector((state) => state.auth.authDetails);

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/verify/:id/:code"]} component={Home} />
        <Route path="/items" component={Order} />
        <PrivateRoute path="/">
          <AfterLogin />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
