import { WEB_URL } from "../config";
import Modal from "../containers/Test";

const Route = [
    {
        path: WEB_URL.TEST,
        exact: true,
        isProtected: false,
        component: Modal
    }
];


export default Route;