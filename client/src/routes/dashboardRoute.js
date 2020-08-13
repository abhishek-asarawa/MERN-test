import { WEB_URL } from "../config";
import Dashboard from "../containers/Dashboard";

const route = [
    {
        path: WEB_URL.DASHBOARD,
        exact: true,
        isProtected: true,
        component: Dashboard
    }
]

export default route;