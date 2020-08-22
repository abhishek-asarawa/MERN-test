import { WEB_URL } from "../config";
import  Todo  from "../containers/Todo";

const todoRoute = [
    {
        path: WEB_URL.TODO,
        exact: true,
        isProtected: false,
        component: Todo
    }
];


export default todoRoute;