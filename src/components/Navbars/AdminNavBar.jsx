import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import { AppBar, Toolbar, Hidden } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import MoreVert from '@material-ui/icons/MoreVert';
import ViewList from '@material-ui/icons/ViewList';
import Button from '../CustomButtons/Button';
import AdminNavBarLinks from './AdminNavBarLinks';

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
    ...theme.dashboard.container.fluid,
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
    color: 'inherit',
    paddingTop: '0.625rem',
    paddingBottom: '0.625rem',
    margin: '0 !important',
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      background: 'transparent',
    },
  },
  appResponsive: {
    top: 8,
  },
  primary: {
    backgroundColor: theme.dashboard.palette.primary[0],
    color: theme.dashboard.paletteTwo.white,
    ...theme.dashboard.boxShadow.default,
  },
  info: {
    backgroundColor: theme.dashboard.palette.info[0],
    color: theme.dashboard.paletteTwo.white,
    ...theme.dashboard.boxShadow.default,
  },
  success: {
    backgroundColor: theme.dashboard.palette.success[0],
    color: theme.dashboard.paletteTwo.white,
    ...theme.dashboard.boxShadow.default,
  },
  warning: {
    backgroundColor: theme.dashboard.palette.warning[0],
    color: theme.dashboard.paletteTwo.white,
    ...theme.dashboard.boxShadow.default,
  },
  danger: {
    backgroundColor: theme.dashboard.palette.danger[0],
    color: theme.dashboard.paletteTwo.white,
    ...theme.dashboard.boxShadow.default,
  },
  sidebarMinimize: {
    float: 'left',
    padding: '0 0 0 15px',
    display: 'block',
    color: theme.dashboard.palette.gray[6],
  },
  sidebarMiniIcon: {
    width: 20,
    height: 17,
  },
}));

function AdminNavBar(props) {
  const classes = useStyles();
  const {
    color,
    brandText,
    miniActive,
    handleDrawerToggle,
    sidebarMinimize,
  } = props;
  const appBarClasses = cx({
    [classes.appBar]: true,
    [classes[color]]: color,
  });
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown implementation="css">
          <div className={classes.sidebarMinimize}>
            <Button justIcon round color="white" onClick={sidebarMinimize}>
              {miniActive ? (
                <ViewList className={classes.sidebarMiniIcon} />
              ) : (
                <MoreVert className={classes.sidebarMiniIcon} />
              )}
            </Button>
          </div>
        </Hidden>
        <div className={classes.flex}>
          <Button href="#" className={classes.title} color="transparent">
            {brandText}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <AdminNavBarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <Button
            className={classes.appResponsive}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

AdminNavBar.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  brandText: PropTypes.string,
  miniActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  sidebarMinimize: PropTypes.func,
};

export default AdminNavBar;
