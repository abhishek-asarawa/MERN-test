import Signin from "../containers/Signin";
import { WEB_URL } from "../config"

const SigninRoutes = [
    {
        path: WEB_URL.SIGNIN,
        exact: true,
        isProtected: true,
        component: Signin
    }
];

export default SigninRoutes;