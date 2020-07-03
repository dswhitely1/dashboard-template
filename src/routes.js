import DashboardIcon from '@material-ui/icons/Dashboard';
import Fingerprint from '@material-ui/icons/Fingerprint';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Dashboard from './views/Dashboard/Dashboard';
import LoginPage from './views/Pages/LoginPage';
import RegisterPage from './views/Pages/RegisterPage';

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/login',
    name: 'Login',
    icon: Fingerprint,
    component: LoginPage,
    layout: '/auth',
  },
  {
    path: '/register',
    name: 'Register',
    icon: PersonAdd,
    component: RegisterPage,
    layout: '/auth',
  },
];
