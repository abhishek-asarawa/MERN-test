import loginRoutes from "./loginRoutes";
import SigninRoutes from "./signinRoute";
import DashboardRoute from "./dashboardRoute";

export default [
    ...loginRoutes,
    ...SigninRoutes,
    ...DashboardRoute
];