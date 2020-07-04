import React, { createRef, useEffect, useState, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import routes from '../routes';
import AuthNavBar from '../components/Navbars/AuthNavbar';
import Footer from '../components/Footer/Footer';
import firework from '../assets/images/fireworks.jpg';
import { useRouterUtils } from '../providers/Router/routerUtils';

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: 'auto',
    minHeight: '100vh',
    position: 'relative',
    top: 0,
  },
  fullPage: {
    padding: '120px 0',
    position: 'relative',
    minHeight: '100vh',
    display: 'flex !important',
    margin: 0,
    border: 0,
    color: theme.dashboard.paletteTwo.white,
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${firework})`,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      minHeight: '700px !important',
    },
    '& footer': {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      border: 'none !important',
    },
    '&:before': {
      backgroundColor: `rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.65)`,
    },
    '&:before,&:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 2,
    },
  },
}));

function AuthLayout(props) {
  const { ...rest } = props;
  const [getRoutes, getActiveRoute] = useRouterUtils();
  const [brandText, setBrandText] = useState('');
  const wrapper = createRef();
  const classes = useStyles();

  useEffect(() => {
    document.body.style.overflow = 'unset';
    return () => {};
  });

  useEffect(() => {
    const updatedName = getActiveRoute(routes);
    setBrandText(updatedName);
  }, [getActiveRoute, rest.location.pathname]);

  return (
    <>
      <AuthNavBar brandText={brandText} {...rest} />
      <div className={classes.wrapper} ref={wrapper}>
        <div className={classes.fullPage}>
          <Switch>
            {getRoutes(routes, '/auth')}
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <Footer white />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
