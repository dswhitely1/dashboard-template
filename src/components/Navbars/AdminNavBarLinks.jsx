import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person';
import {
  ClickAwayListener,
  Divider,
  Grow,
  Hidden,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core';
import Dashboard from '@material-ui/icons/Dashboard';
import cx from 'classnames';
import Button from '../CustomButtons/Button';

const useStyles = makeStyles(theme => ({
  popperClose: {
    pointerEvents: 'none',
    display: 'none !important',
  },
  popperNav: {
    [theme.breakpoints.down('sm')]: {
      position: 'static !important',
      left: 'unset !important',
      top: 'unset !important',
      transform: 'none !important',
      willChange: 'unset !important',
      '& > div': {
        boxShadow: 'none !important',
        marginLeft: 0,
        marginRight: 0,
        transition: 'none !important',
        marginTop: '0px !important',
        marginBottom: '0px !important',
        padding: '0px !important',
        backgroundColor: 'transparent !important',
        '& ul li': {
          color: `${theme.dashboard.paletteTwo.white} !important`,
          margin: '10px 15px 0 !important',
          padding: '10px 15px !important',
          '&:hover': {
            backgroundColor: 'hsla(0,0%,78%,.2)',
            boxShadow: 'none',
          },
        },
      },
    },
  },
  dropdown: {
    borderRadius: 3,
    border: 0,
    boxShadow: `0 2px 5px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.black
    )}, 0.26)`,
    top: '100%',
    zIndex: 1000,
    minWidth: 160,
    padding: '5px 0',
    margin: '2px 0 0',
    fontSize: 14,
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: theme.dashboard.paletteTwo.white,
    backgroundClip: 'padding-box',
  },
  popperResponsive: {
    zIndex: 1200,
    [theme.breakpoints.down('sm')]: {
      zIndex: 1640,
      position: 'static',
      float: 'none',
      width: 'auto',
      marginTop: 0,
      backgroundColor: 'transparent',
      border: 0,
      boxShadow: 'none',
      color: 'black',
    },
  },
  dropdownItem: {
    ...theme.dashboard.font,
    fontSize: 13,
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: 2,
    position: 'relative',
    transition: 'all 150ms linear',
    display: 'block',
    clear: 'both',
    fontWeight: 400,
    height: '100%',
    color: theme.dashboard.palette.gray[7],
    whiteSpace: 'nowrap',
    minHeight: 'unset',
  },
  primaryHover: {
    '&:hover': {
      backgroundColor: theme.dashboard.palette.primary[0],
      color: theme.dashboard.paletteTwo.white,
      ...theme.dashboard.boxShadow.primary,
    },
  },
  search: {
    margin: 0,
    paddingTop: 7,
    paddingBottom: 7,
    [theme.breakpoints.down('sm')]: {
      margin: '10px 15px',
      float: 'none !important',
      paddingTop: 1,
      paddingBottom: 1,
      padding: '10px 15px',
      width: 'auto',
    },
  },
  searchInput: {
    paddingTop: 2,
  },
  linkText: {
    zIndex: 4,
    ...theme.dashboard.font,
    fontSize: 14,
    margin: '0 !important',
    textTransform: 'none',
  },
  buttonLink: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      margin: '5px 15px 0',
      width: 'auto',
      height: 'auto',
      '& svg': {
        width: 30,
        height: 24,
        marginRight: 19,
        marginLeft: 3,
      },
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        width: 30,
        fontSize: 24,
        lineHeight: '30px',
        marginRight: 19,
        marginLeft: 3,
      },
    },
  },
  searchButton: {
    [theme.breakpoints.down('sm')]: {
      top: '-50px !important',
      marginRight: 38,
      float: 'right',
    },
  },
  searchIcon: {
    width: 17,
    zIndex: 4,
  },
  links: {
    width: 20,
    height: 20,
    zIndex: 4,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: 30,
      height: 30,
      color: 'inherit',
      opacity: 0.8,
      marginRight: 16,
      marginLeft: -5,
    },
  },
  notifications: {
    zIndex: 4,
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 5,
      border: `1px solid ${theme.dashboard.paletteTwo.white}`,
      right: 5,
      fontSize: 9,
      background: theme.dashboard.palette.danger[0],
      color: theme.dashboard.paletteTwo.white,
      minWidth: 16,
      height: 16,
      borderRadius: 10,
      textAlign: 'center',
      lineHeight: '14px',
      verticalAlign: 'middle',
      display: 'block',
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.dashboard.font,
      fontSize: 14,
      marginRight: 8,
    },
  },
  managerClasses: {
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
    },
  },
  headerLinksSvg: {
    width: '20px !important',
    height: '20px !important',
  },
}));

function AdminNavBarLinks() {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = useState(null);

  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const iconClasses = cx({
    [classes.headerLinksSvg]: true,
    [classes.links]: true,
  });
  const dropdownItem = cx({
    [classes.dropDownItem]: true,
    [classes.primaryHover]: true,
  });
  const handleCloseProfile = () => setOpenProfile(null);
  return (
    <div>
      <Button
        color="transparent"
        simple
        aria-label="Dashboard"
        justIcon
        className={classes.buttonLink}
      >
        <Dashboard className={iconClasses} />
        <Hidden mdUp implementation="css">
          <span className={classes.linkText}>Dashboard</span>
        </Hidden>
      </Button>
      <div className={classes.managerClasses}>
        <Button
          color="transparent"
          aria-label="Person"
          justIcon
          aria-owns={openProfile ? 'profile-menu-list' : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <Person className={iconClasses} />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>Profile</span>
          </Hidden>
        </Button>
        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          placement="bottom"
          className={cx({
            [classes.popperClose]: !openProfile,
            [classes.popperResponsive]: true,
            [classes.popperNav]: true,
          })}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list"
              style={{ transformOrigin: '0 0 0' }}
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={dropdownItem}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={dropdownItem}
                    >
                      Settings
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={dropdownItem}
                    >
                      Log out
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

AdminNavBarLinks.propTypes = {};

export default AdminNavBarLinks;
