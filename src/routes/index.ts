import Home from "../pages/Home";
import {routes} from "../config";

interface IRoute {
    path: string;
    component: any;
    layout?: any; // default is MainLayout
}

const publicRoutes = [
	{ path: routes.home, component: Home },
];

const protectedRoutes: IRoute[] = [];
const privateRoutes: IRoute[] = [];

export {publicRoutes, protectedRoutes, privateRoutes};
