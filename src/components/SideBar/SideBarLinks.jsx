import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Collapse,
  Icon,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function SideBarLinks(props) {
  const {
    color,
    activeRoute,
    routes,
    openCollapse,
    getCollapseInitialState,
    collapseState,
    classes,
    miniActive,
    miniActiveState,
  } = props;

  const itemText = cx({
    [classes.itemText]: true,
    [classes.itemTextMini]: miniActive && miniActiveState,
  });
  const collapseItemText = cx({
    [classes.collapseItemText]: true,
    [classes.collapseItemTextMini]: miniActiveState && miniActive,
  });

  const itemIcon = cx({
    [classes.itemIcon]: true,
  });
  const collapseItemMini = cx({
    [classes.collapseItemMini]: true,
  });
  const listClasses = cx(classes.list, classes.collapseList);
  const getRoutes = checkRoutes =>
    checkRoutes.map(
      (
        {
          display,
          redirect,
          collapse,
          views,
          icon: RouteIcon,
          mini,
          name,
          state,
          layout,
          path,
        },
        key
      ) => {
        const navLinkClasses = cx({
          [classes.itemLink]: true,
          [classes.collapseActive]: getCollapseInitialState(views),
        });
        const innerNavLinkClasses = cx({
          [classes.collapseItemLink]: true,
          [classes[color]]: activeRoute(`${layout}${path}`),
        });
        if (redirect) {
          return null;
        }
        if (!display) {
          return null;
        }
        if (collapse) {
          const caretClasses = cx({
            [classes.caret]: true,
            [classes.caretActive]: collapseState[state],
          });

          return (
            <ListItem
              key={key}
              className={cx(
                { [classes.item]: RouteIcon !== undefined },
                { [classes.collapseItem]: RouteIcon !== undefined }
              )}
            >
              <NavLink
                to="#"
                className={navLinkClasses}
                onClick={e => {
                  e.preventDefault();
                  openCollapse(state);
                }}
              >
                {RouteIcon !== undefined ? (
                  typeof RouteIcon === 'string' ? (
                    <Icon className={itemIcon}>{RouteIcon}</Icon>
                  ) : (
                    <RouteIcon className={itemIcon} />
                  )
                ) : (
                  <span className={collapseItemMini}>{mini}</span>
                )}
                <ListItemText
                  primary={name}
                  secondary={<b className={caretClasses} />}
                  disableTypography
                  className={cx(
                    { [itemText]: RouteIcon !== undefined },
                    { [collapseItemText]: RouteIcon !== undefined }
                  )}
                />
              </NavLink>
              <Collapse in={collapseState[state]} unmountOnExit>
                <List className={listClasses}>{getRoutes(views)}</List>
              </Collapse>
            </ListItem>
          );
        }

        return (
          <ListItem
            key={key}
            className={cx(
              { [classes.item]: RouteIcon !== undefined },
              { [classes.collapseItem]: RouteIcon !== undefined }
            )}
          >
            <NavLink
              to={`${layout}${path}`}
              className={cx(
                { [navLinkClasses]: RouteIcon !== undefined },
                { [innerNavLinkClasses]: RouteIcon !== undefined }
              )}
            >
              {RouteIcon !== undefined ? (
                typeof RouteIcon === 'string' ? (
                  <Icon className={itemIcon}>{RouteIcon}</Icon>
                ) : (
                  <RouteIcon className={itemIcon} />
                )
              ) : (
                <span className={collapseItemMini}>{mini}</span>
              )}
              <ListItemText
                primary={name}
                disableTypography
                className={cx(
                  { [itemText]: RouteIcon !== undefined },
                  { [collapseItemText]: RouteIcon !== undefined }
                )}
              />
            </NavLink>
          </ListItem>
        );
      }
    );
  return <List>{getRoutes(routes)}</List>;
}

SideBarLinks.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      display: PropTypes.bool,
      redirect: PropTypes.bool,
      path: PropTypes.string,
      name: PropTypes.string,
      icon: PropTypes.object,
      component: PropTypes.func,
      layout: PropTypes.string,
      collapse: PropTypes.bool,
      state: PropTypes.string,
      views: PropTypes.arrayOf(
        PropTypes.shape({
          redirect: PropTypes.bool,
          path: PropTypes.string,
          name: PropTypes.string,
          icon: PropTypes.object,
          component: PropTypes.object,
          layout: PropTypes.string,
          collapse: PropTypes.bool,
          state: PropTypes.string,
          mini: PropTypes.string,
        })
      ),
      mini: PropTypes.string,
    })
  ),
  getCollapseInitialState: PropTypes.func,
  collapseState: PropTypes.object,
  openCollapse: PropTypes.func,
  activeRoute: PropTypes.func,
  classes: PropTypes.shape({
    list: PropTypes.string,
    itemLink: PropTypes.string,
    collapseActive: PropTypes.string,
    itemText: PropTypes.string,
    itemTextMini: PropTypes.string,
    collapseItemText: PropTypes.string,
    collapseItemTextMini: PropTypes.string,
    itemIcon: PropTypes.string,
    caret: PropTypes.string,
    collapseItemMini: PropTypes.string,
    item: PropTypes.string,
    collapseItem: PropTypes.string,
    caretActive: PropTypes.string,
    collapseList: PropTypes.string,
    collapseItemLink: PropTypes.string,
  }),
  miniActive: PropTypes.bool,
  miniActiveState: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'red',
    'orange',
    'green',
    'blue',
    'purple',
    'rose',
  ]),
};

export default SideBarLinks;
