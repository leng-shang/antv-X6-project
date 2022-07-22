import Home from "../home"
import AuthorityUser from "../authorityUser"
let routeConfig = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/setting',
        element: <AuthorityUser />
    }
]
export  default routeConfig
