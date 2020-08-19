import loginRoutes from "./loginRoutes";
import SigninRoutes from "./signinRoute";
import DashboardRoute from "./dashboardRoute";
import CalculatorRoute from "./calculatorRoute";

export default [
    ...loginRoutes,
    ...SigninRoutes,
    ...DashboardRoute,
    ...CalculatorRoute
];