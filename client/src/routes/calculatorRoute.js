import Calculator from "../containers/Calculator";
import { WEB_URL } from "../config";

const route = [
    {
        path: WEB_URL.CALCULATOR,
        isProtected: true,
        exact: true,
        component: Calculator
    }
];

export default route;