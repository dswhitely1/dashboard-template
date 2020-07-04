import React, { useState, useEffect, createRef, useCallback } from 'react';
import cx from 'classnames';
import { Switch, Route, Redirect } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer/Footer';
import image from '../assets/images/sidebar.jpg';
import routes from '../routes';
import { useRouterUtils } from '../providers/Router/routerUtils';
import SideBar from '../components/SideBar/SideBar';
import AdminNavBar from '../components/Navbars/AdminNavBar';

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
    top: 0,
    height: '100vh',
    '&:after': {
      display: 'table',
      clear: 'both',
      content: '" "',
    },
  },
  mainPanel: {
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.dashboard.drawerWidth.default}px)`,
    },
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    ...theme.dashboard.transition,
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch',
  },
  content: {
    marginTop: 70,
    padding: '30px 15px',
    minHeight: 'calc(100vh - 123px)',
  },
  container: { ...theme.dashboard.container.fluid },
  mainPanelSidebarMini: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.dashboard.drawerWidth.mini}px)`,
    },
  },
  mainPanelWithPerfectScrollbar: {
    overflow: 'hidden !important',
  },
}));
let ps;
function DashboardLayout(props) {
  const { ...rest } = props;
  const [brandText, setBrandText] = useState('');
  const [isWin] = useState(() => navigator.platform.indexOf('Win') > -1);
  const [getRoutes, getActiveRoute] = useRouterUtils();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [miniActive, setMiniActive] = useState(false);
  const [logo] = useState(null);
  const [bgImage] = useState(image);
  const [color] = useState('blue');
  const [bgColor] = useState('black');
  const mainPanel = createRef();

  useEffect(() => {
    const newName = getActiveRoute(routes);
    setBrandText(newName);
  }, [getActiveRoute, rest.location.pathname]);

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    if (isWin) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollY: false,
        suppressScrollX: true,
      });
      document.body.style.overflow = 'hidden';
    }
    document.addEventListener('resize', resizeFunction);
    return () => {
      if (isWin) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  });

  const classes = useStyles();
  const mainPanelClasses = cx({
    [classes.mainPanel]: true,
    [classes.mainPanelSidebarMini]: miniActive,
    [classes.mainPanelWithPerfectScrollbar]:
      navigator.platform.indexOf('Win') > -1,
  });

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const sidebarMinimize = () => setMiniActive(!miniActive);

  return (
    <div className={classes.wrapper}>
      <SideBar
        routes={routes}
        logoText="Donald Whitely"
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        bgColor={bgColor}
        miniActive={miniActive}
        {...rest}
      />
      <div className={mainPanelClasses} ref={mainPanel}>
        <AdminNavBar
          sidebarMinimize={sidebarMinimize}
          miniActive={miniActive}
          brandText={brandText}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>
              {getRoutes(routes, '/admin')}
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
          </div>
        </div>
        <Footer fluid />
      </div>
    </div>
  );
}

export default DashboardLayout;
