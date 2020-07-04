import DashboardIcon from '@material-ui/icons/Dashboard';
import Fingerprint from '@material-ui/icons/Fingerprint';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Image from '@material-ui/icons/Image';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';
import Dashboard from './views/Dashboard/Dashboard';
import LoginPage from './views/Pages/LoginPage';
import RegisterPage from './views/Pages/RegisterPage';

export default [
  {
    display: true,
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: Dashboard,
    layout: '/admin',
  },
  {
    collapse: true,
    display: false,
    name: 'Auth Routes',
    icon: Image,
    state: 'authCollapse',
    views: [
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
    ],
  },
  {
    collapse: true,
    display: true,
    name: 'Team Leads',
    icon: SupervisorAccountIcon,
    state: 'teamLeadCollapse',
    views: [],
  },
  {
    collapse: true,
    display: true,
    icon: FaceTwoToneIcon,
    name: 'Students',
    state: 'studentCollapse',
    views: [],
  },
];
