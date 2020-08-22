import { WEB_URL } from "../config";
import { GoogleAuth } from "../components";

const HomeRoute = [
    {
        path: WEB_URL.HOME,
        exact: true,
        isProtected: false,
        component: GoogleAuth
    }
];

export default HomeRoute;