import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route
          path="*"
          render={() => (
            <div>
              Ops...! <strong>404</strong>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
