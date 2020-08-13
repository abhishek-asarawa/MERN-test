import React from 'react';
import { Switch } from "react-router-dom";
import _ from "lodash";
import routes from "./routes";
import Layout from "./containers/Layout";
import { PrivateRoute } from './components';
import { PublicRoute } from './components';

function App() {
  return (
    <Layout>
      <Switch>
      {
        _.map(routes, (route, idx) => {
          console.log(route);
          return (
            // <Route {...route} key={idx}/>
            !!route.isProtected ?
                <PrivateRoute {...route} key={idx} /> :
                <PublicRoute {...route} key={idx} />
          );
        })
      }
      </Switch>
    </Layout>
  );
}

export default App;
