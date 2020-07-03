import React, { useState } from 'react';
import cx from 'classnames';
import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Drawer, Hidden, Toolbar } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import Button from '../CustomButtons/Button';
import AuthNavBarLinks from './AuthNavBarLinks';

const authNavBarColor = (theme, key) => ({
  backgroundColor: theme.dashboard.palette[key][0],
  color: theme.dashboard.paletteTwo.white,
  ...theme.dashboard.boxShadow[key],
});

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: 0,
    marginBottom: 0,
    position: 'absolute',
    width: '100%',
    paddingTop: 10,
    zIndex: 1029,
    color: theme.dashboard.palette.gray[6],
    border: 0,
    borderRadius: 3,
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
    minHeight: 50,
    display: 'block',
  },
  container: {
    ...theme.dashboard.container.default,
    minHeight: 50,
  },
  flex: {
    flex: 1,
  },
  title: {
    ...theme.dashboard.font,
    lineHeight: '30px',
    fontSize: 18,
    borderRadius: 3,
    textTransform: 'none',
    color: theme.dashboard.paletteTwo.white,
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      background: 'transparent',
      color: theme.dashboard.paletteTwo.white,
    },
  },
  appResponsive: {
    top: 8,
  },
  primary: authNavBarColor(theme, 'primary'),
  secondary: authNavBarColor(theme, 'secondary'),
  info: authNavBarColor(theme, 'info'),
  success: authNavBarColor(theme, 'success'),
  warning: authNavBarColor(theme, 'warning'),
  danger: authNavBarColor(theme, 'danger'),
  list: {
    ...theme.dashboard.font,
    fontSize: 14,
    margin: 0,
    marginRight: -15,
    paddingLeft: 0,
    listStyle: 'none',
    color: theme.dashboard.paletteTwo.white,
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItem: {
    float: 'left',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      zIndex: 999,
      width: '100%',
      paddingRight: 15,
    },
  },
  navLink: {
    color: theme.dashboard.paletteTwo.white,
    margin: '0 5px',
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 500,
    fontSize: 12,
    textTransform: 'uppercase',
    borderRadius: 3,
    lineHeight: '20px',
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    '&:hover,&:focus': {
      color: theme.dashboard.paletteTwo.white,
      background: `rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[17]
      )}, 0.2)`,
    },
  },
  listItemIcon: {
    marginTop: -3,
    top: 0,
    position: 'relative',
    marginRight: 3,
    width: 20,
    height: 20,
    verticalAlign: 'middle',
    color: 'inherit',
    display: 'inline-block',
  },
  listItemText: {
    flex: 'none',
    padding: 0,
    minWidth: 0,
    margin: 0,
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap',
  },
  navLinkActive: {
    backgroundColor: `rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.white
    )}, 0.1)`,
  },
  drawerPaper: {
    border: 'none',
    bottom: 0,
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    ...theme.dashboard.boxShadow.default,
    width: theme.dashboard.drawerWidth.default,
    position: 'fixed',
    display: 'block',
    top: 0,
    height: '100vh',
    right: 0,
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: 0,
    paddingLeft: 0,
    ...theme.dashboard.transition,
    '&:before,&:after': {
      position: 'absolute',
      zIndex: 3,
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      top: 0,
    },
    '&:after': {
      background: theme.dashboard.paletteTwo.black,
      opacity: 0.8,
    },
  },
  sidebarButton: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.paletteTwo.white,
    },
    top: -2,
  },
}));

function AuthNavBar(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleDrawerToggle = () => setOpen(!open);
  const routerLocation = useLocation();
  const { color, brandText } = props;
  const activeRoute = routeName => routerLocation.pathname === routeName;
  const appBarClasses = cx({
    [classes.appBar]: true,
    [classes[color]]: color,
  });
  return (
    <AppBar position="static" className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              MD Pro React
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>
          <AuthNavBarLinks activeRoute={activeRoute} classes={classes} />
        </Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor="right"
              open={open}
              classes={{ paper: classes.drawerPaper }}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
            >
              <AuthNavBarLinks activeRoute={activeRoute} classes={classes} />
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

AuthNavBar.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  brandText: PropTypes.string,
};

export default AuthNavBar;
