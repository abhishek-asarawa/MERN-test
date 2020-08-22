import loginRoutes from "./loginRoutes";
import SigninRoutes from "./signinRoute";
import DashboardRoute from "./dashboardRoute";
import CalculatorRoute from "./calculatorRoute";
import todoRoute from "./todoRoute";
import modalRoute from "./modal";
import HomeRoute from "./homeRoute";

export default [
    ...loginRoutes,
    ...SigninRoutes,
    ...DashboardRoute,
    ...CalculatorRoute,
    ...todoRoute,
    ...modalRoute,
    ...HomeRoute
];