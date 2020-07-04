import React, { useState, createRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import { Hidden, Drawer } from '@material-ui/core';
import SideBarWrapper from './SideBarWrapper';
import SideBarBrand from './SideBarBrand';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    border: 'none',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 1032,
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    ...theme.dashboard.boxShadow.default,
    width: theme.dashboard.drawerWidth.default,
    [theme.breakpoints.up('md')]: {
      width: theme.dashboard.drawerWidth.default,
      position: 'fixed',
      height: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: theme.dashboard.drawerWidth.default,
      ...theme.dashboard.boxShadow.default,
      position: 'fixed',
      display: 'block',
      top: 0,
      height: '100vh',
      right: 0,
      left: 'auto',
      zIndex: 1032,
      visibility: 'visible',
      overflowY: 'visible',
      borderTop: 'none',
      textAlign: 'left',
      paddingRight: 0,
      paddingLeft: 0,
      transform: `translate3d(${theme.dashboard.drawerWidth.default}px, 0, 0)`,
      ...theme.dashboard.transition,
    },
    '&:before,&:after': {
      position: 'absolute',
      zIndex: 3,
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      top: 0,
    },
  },
  blackBackground: {
    color: theme.dashboard.paletteTwo.white,
    '&:after': {
      background: theme.dashboard.paletteTwo.black,
      opacity: 0.8,
    },
  },
  blueBackground: {
    color: theme.dashboard.paletteTwo.white,
    '&:after': {
      background: theme.dashboard.palette.info[0],
      opacity: 0.93,
    },
  },
  whiteBackground: {
    color: theme.dashboard.palette.gray[2],
    '&:after': {
      background: theme.dashboard.paletteTwo.white,
      opacity: '.93',
    },
  },
  whiteAfter: {
    '&:after': {
      backgroundColor: 'hsla(0,0%,71%,.3) !important',
    },
  },
  drawerPaperMini: {
    width: `${theme.dashboard.drawerWidth.mini}px !important`,
  },
  logo: {
    padding: '15px 0',
    margin: 0,
    display: 'block',
    position: 'relative',
    zIndex: 4,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      height: 1,
      right: 15,
      width: 'calc(100% - 30px)',
      backgroundColor: 'hsla(0,0%,100%,.3)',
    },
  },
  logoMini: {
    transition: 'all 300ms linear',
    opacity: 1,
    float: 'left',
    textAlign: 'center',
    width: 30,
    display: 'inline-block',
    maxHeight: 30,
    marginLeft: 22,
    marginRight: 18,
    marginTop: 7,
    color: 'inherit',
  },
  logoNormal: {
    ...theme.dashboard.font,
    transition: 'all 300ms linear',
    display: 'block',
    opacity: '1',
    transform: 'translate3d(0px,0,0)',
    textTransform: 'uppercase',
    padding: '5px 0',
    fontSize: 18,
    whiteSpace: 'nowrap',
    fontWeight: 400,
    lineHeight: '30px',
    overflow: 'hidden',
    '&,&:hover,&:focus': {
      color: 'inherit',
    },
  },
  logoNormalSidebarMini: {
    opacity: 0,
    transform: 'translate3d(-25px, 0, 0)',
  },
  img: {
    width: 35,
    verticalAlign: 'middle',
    border: 0,
  },
  background: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    display: 'block',
    top: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'cover cover',
    transition: 'all 300ms linear',
  },
  list: {
    marginTop: 15,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginBottom: 0,
    listStyle: 'none',
    color: 'inherit',
    '&:before,&:after': {
      display: 'table',
      content: '" "',
    },
    '&:after': {
      clear: 'both',
    },
  },
  item: {
    color: 'inherit',
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    margin: 0,
    padding: 0,
  },
  userItem: {
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  itemLink: {
    paddingLeft: 10,
    paddingRight: 10,
    transition: 'all 300ms linear',
    margin: '10px 15px 0',
    borderRadius: 3,
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    backgroundColor: 'transparent',
    ...theme.dashboard.font,
    width: 'auto',
    '&:hover': {
      outline: 'none',
      backgroundColor: `rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[17]
      )}, 0.2)`,
      boxShadow: 'none',
    },
    '&,&:hover,&:focus': {
      color: 'inherit',
    },
  },
  itemIcon: {
    color: 'inherit',
    width: 30,
    height: 24,
    float: 'left',
    position: 'inherit',
    top: 3,
    marginRight: 15,
    textAlign: 'center',
    verticalAlign: 'middle',
    opacity: 0.8,
  },
  itemText: {
    color: 'inherit',
    ...theme.dashboard.font,
    margin: 0,
    lineHeight: '30px',
    fontSize: 14,
    transform: 'translate3d(0px,0,0)',
    opacity: 1,
    transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
    position: 'relative',
    display: 'block',
    height: 'auto',
    whiteSpace: 'nowrap',
    padding: '0 16px !important',
  },
  userItemText: {
    lineHeight: '22px',
  },
  itemTextMini: {
    transform: 'translate3d(-25px,0 0) !important',
    opacity: 0,
  },
  collapseList: {
    marginTop: 0,
    '& $caret': {
      marginTop: 8,
    },
  },
  collapseItem: {
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    margin: '10px 0 0 0',
    padding: 0,
  },
  collapseActive: {
    outline: 'none',
    backgroundColor: `rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.gray[17]
    )}, 0.2)`,
    boxShadow: 'none',
  },
  collapseItemLink: {
    transition: 'all 300ms linear',
    margin: '0 15px',
    borderRadius: 3,
    position: 'relative',
    display: 'block',
    padding: 10,
    backgroundColor: 'transparent',
    ...theme.dashboard.font,
    width: 'auto',
    '&:hover': {
      outline: 'none',
      backgroundColor: `rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[17]
      )}, 0.2)`,
      boxShadow: 'none',
    },
    '&,&:hover,&:focus': {
      color: 'inherit',
    },
  },
  collapseItemMini: {
    color: 'inherit',
    ...theme.dashboard.font,
    textTransform: 'uppercase',
    width: 30,
    marginRight: 15,
    textAlign: 'center',
    letterSpacing: '1px',
    position: 'relative',
    float: 'left',
    display: 'inherit',
    transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
    fontSize: 14,
  },
  collapseItemText: {
    color: 'inherit',
    ...theme.dashboard.font,
    lineHeight: '30px',
    margin: 0,
    position: 'relative',
    transform: 'translateX(0px)',
    opacity: 1,
    whiteSpace: 'nowrap',
    display: 'block',
    transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
  },
  collapseItemTextMini: {
    transform: 'translate3d(-25px,0,0)',
    opacity: 0,
  },
  caret: {
    marginTop: 13,
    position: 'absolute',
    right: 18,
    transition: 'all 150ms ease-in',
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: 2,
    verticalAlign: 'middle',
    borderTop: '4px solid',
    borderRight: '4px solid transparent',
    borderLeft: '4px solid transparent',
  },
  userCaret: {
    marginTop: 10,
  },
  caretActive: {
    transform: 'rotate(180deg)',
  },
  purple: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.paletteTwo.white,
      backgroundColor: theme.dashboard.palette.primary[0],
      ...theme.dashboard.boxShadow.primary,
    },
  },
  blue: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.paletteTwo.white,
      backgroundColor: theme.dashboard.palette.info[0],
      boxShadow: `0 12px 20px -10px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.info[0]
      )}, 0.28), 0 4px 20px 0 rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.12), 0 7px 8px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.info[0]
      )}, 0.2)`,
    },
  },
  green: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.paletteTwo.white,
      backgroundColor: theme.dashboard.palette.success[0],
      boxShadow: `0 12px 20px -10px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.success[0]
      )}, 0.28), 0 4px 20px 0 rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.12), 0 7px 8px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.success[0]
      )}, 0.2)`,
    },
  },
  orange: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.paletteTwo.white,
      backgroundColor: theme.dashboard.palette.warning[0],
      boxShadow: `0 12px 20px -10px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.warning[0]
      )}, 0.28), 0 4px 20px 0 rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.12), 0 7px 8px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.warning[0]
      )}, 0.2)`,
    },
  },
  red: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.paletteTwo.white,
      backgroundColor: theme.dashboard.palette.danger[0],
      boxShadow: `0 12px 20px -10px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.danger[0]
      )}, 0.28), 0 4px 20px 0 rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.12), 0 7px 8px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.danger[0]
      )}, 0.2)`,
    },
  },
  white: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.palette.gray[2],
      backgroundColor: theme.dashboard.paletteTwo.white,
      boxShadow: `0 4px 20px 0 rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.14), 0 7px 10px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[2]
      )}, 0.4)`,
    },
  },
  rose: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.paletteTwo.white,
      backgroundColor: theme.dashboard.palette.secondary[0],
      boxShadow: `0 4px 20px 0 rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.14), 0 7px 10px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.secondary[0]
      )}, 0.4)`,
    },
  },
  sideBarWrapper: {
    position: 'relative',
    height: 'calc(100vh - 75px)',
    overflow: 'auto',
    width: 260,
    zIndex: 4,
    overflowScrolling: 'touch',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    color: 'inherit',
    paddingBottom: 30,
  },
  sidebarWrapperWithPerfectScrollbar: {
    overflow: 'hidden !important',
  },
  user: {
    paddingBottom: 20,
    margin: '20px auto 0',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 15,
      height: 1,
      width: 'calc(100% - 30px)',
      backgroundColor: 'hsla(0,0%,100%,0.3)',
    },
  },
  photo: {
    transition: 'all 300ms linear',
    width: 34,
    height: 34,
    overflow: 'hidden',
    float: 'left',
    zIndex: 5,
    marginRight: 11,
    borderRadius: '50%',
    marginLeft: 23,
    ...theme.dashboard.boxShadow.default,
  },
  avatarImg: {
    width: '100%',
    verticalAlign: 'middle',
    border: 0,
  },
  userCollapseButton: {
    margin: 0,
    padding: '6px 15px',
    '&:hover': {
      background: 'none',
    },
  },
  userCollapseLinks: {
    marginTop: -4,
  },
}));

function SideBar(props) {
  const classes = useStyles();
  const [miniActiveState, setMiniActive] = useState(false);
  const sideBar = createRef();
  const {
    color,
    handleDrawerToggle,
    image,
    logo,
    logoText,
    routes,
    miniActive,
    open,
    bgColor,
    location,
  } = props;
  const getCollapseInitialState = checkRoutes => {
    if (checkRoutes) {
      for (const route of checkRoutes) {
        const { collapse, views, path } = route;
        if (collapse && getCollapseInitialState(views)) {
          return true;
        }
        if (window.location.href.indexOf(path) !== -1) {
          return true;
        }
      }
      return false;
    }
    return false;
  };

  const getCollapseStates = checkRoutes => {
    let initialState = {};
    for (const route of checkRoutes) {
      const { collapse, state, views } = route;
      if (collapse) {
        initialState = {
          [state]: getCollapseInitialState(views),
          ...getCollapseStates(views),
          ...initialState,
        };
      }
    }
    return initialState;
  };

  const [collapseState, setCollapseState] = useState(() =>
    getCollapseStates(routes)
  );

  const activeRoute = routeName => location.pathname === routeName;

  const openCollapse = collapse =>
    setCollapseState({
      ...collapseState,
      [collapse]: !collapseState[collapse],
    });
  const drawerPaperClasses = cx({
    [classes.drawerPaper]: true,
    [classes.drawerPaperMini]: miniActive && miniActiveState,
    [classes[`${bgColor}Background`]]: bgColor,
  });
  const sideBarWrapperClasses = cx({
    [classes.sideBarWrapper]: true,
    [classes.drawerPaperMini]: miniActive && miniActiveState,
  });
  const logoNormal = cx({
    [classes.logoNormal]: true,
    [classes.logoNormalSidebarMini]: miniActiveState && miniActive,
  });
  const logoClasses = cx({
    [classes.logo]: true,
    [classes.whiteAfter]: bgColor === 'white',
  });
  return (
    <div ref={sideBar}>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={open}
          classes={{
            paper: drawerPaperClasses,
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <SideBarBrand
            logo={logo}
            imageClass={classes.img}
            link="https://www.donwhitely.com"
            logoClasses={logoClasses}
            logoMini={classes.logoMini}
            logoNormal={logoNormal}
            logoText={logoText}
          />
          <SideBarWrapper
            className={sideBarWrapperClasses}
            classes={classes}
            openCollapse={openCollapse}
            miniActive={miniActive}
            miniActiveState={miniActiveState}
            routes={routes}
            getCollapseInitialState={getCollapseInitialState}
            collapseState={collapseState}
            color={color}
            activeRoute={activeRoute}
          />
          {image !== undefined && (
            <div
              className={classes.background}
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          open
          classes={{
            paper: drawerPaperClasses,
          }}
        >
          <SideBarBrand
            logo={logo}
            imageClass={classes.img}
            link="https://www.donwhitely.com"
            logoClasses={logoClasses}
            logoMini={classes.logoMini}
            logoNormal={logoNormal}
            logoText={logoText}
          />
          <SideBarWrapper
            className={sideBarWrapperClasses}
            classes={classes}
            openCollapse={openCollapse}
            miniActive={miniActive}
            miniActiveState={miniActiveState}
            routes={routes}
            getCollapseInitialState={getCollapseInitialState}
            collapseState={collapseState}
            color={color}
            activeRoute={activeRoute}
          />
          {image !== undefined && (
            <div
              className={classes.background}
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
        </Drawer>
      </Hidden>
    </div>
  );
}

SideBar.defaultProps = {
  bgColor: 'blue',
};

SideBar.propTypes = {
  bgColor: PropTypes.oneOf(['white', 'black', 'blue']),
  color: PropTypes.oneOf([
    'white',
    'red',
    'orange',
    'green',
    'blue',
    'purple',
    'rose',
  ]),
  logo: PropTypes.string,
  logoText: PropTypes.string,
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  miniActive: PropTypes.bool,
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default SideBar;
