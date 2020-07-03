import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

function AuthNavBarLinks(props) {
  const { activeRoute, classes } = props;
  return (
    <List className={classes.list}>
      {routes.map(({ layout, path, icon: NavIcon, name }, key) => {
        const routePath = `${layout}${path}`;
        const navClasses = cx({
          [classes.navLink]: true,
          [classes.navLinkActive]: activeRoute(routePath),
        });
        if (layout === '/auth') {
          return (
            <ListItem className={classes.listItem}>
              <NavLink to={routePath} className={navClasses}>
                <NavIcon className={classes.listItemIcon} />
                <ListItemText
                  primary={name}
                  disableTypography
                  className={classes.listItemText}
                />
              </NavLink>
            </ListItem>
          );
        }
      })}
    </List>
  );
}

AuthNavBarLinks.propTypes = {
  activeRoute: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    list: PropTypes.string,
    listItem: PropTypes.string,
    listItemIcon: PropTypes.string,
    listItemText: PropTypes.string,
    navLink: PropTypes.string,
    navLinkActive: PropTypes.string,
  }).isRequired,
};

export default AuthNavBarLinks;
