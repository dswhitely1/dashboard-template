import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const userProfileMenuList = [
  {
    link: '#',
    title: 'My Profile',
    titleMini: 'MP',
  },
  {
    link: '#',
    title: 'Edit Profile',
    titleMini: 'EP',
  },
  {
    link: '#',
    title: 'Settings',
    titleMini: 'S',
  },
];

function SideBarUser(props) {
  const [openAvatar, setOpenAvatar] = useState(false);
  const { avatar, bgColor, classes, miniActive, miniActiveState } = props;

  const openCollapse = () => setOpenAvatar(!openAvatar);

  const userWrapperClasses = cx({
    [classes.user]: true,
    [classes.whiteAfter]: bgColor === 'white',
  });
  const listItemClasses = cx(classes.item, classes.userItem);
  const collapseListClasses = cx(classes.list, classes.collapseList);
  const navLinkButtonClass = cx(classes.itemLink, classes.userCollapseButton);
  const caretClasses = cx({
    [classes.caret]: true,
    [classes.userCaret]: true,
    [classes.caretActive]: openAvatar,
  });
  const itemText = cx({
    [classes.itemText]: true,
    [classes.itemTextMini]: miniActiveState && miniActive,
  });
  const collapseItemText = cx({
    [classes.collapseItemText]: true,
    [classes.collapseItemTextMini]: miniActive && miniActiveState,
  });
  const collapseNavClasses = cx(classes.itemLink, classes.userCollapseLinks);
  const itemTextClasses = cx(itemText, classes.userItemText);
  return (
    <div className={userWrapperClasses}>
      <div className={classes.photo}>
        <img src={avatar} className={classes.avatarImg} alt="..." />
      </div>
      <List className={classes.list}>
        <ListItem className={listItemClasses}>
          <NavLink
            to="#"
            className={navLinkButtonClass}
            onClick={() => openCollapse('openAvatar')}
          >
            <ListItemText
              primary="Current User"
              secondary={<b className={caretClasses} />}
              disableTypography
              className={itemTextClasses}
            />
          </NavLink>
          <Collapse in={openAvatar} unmountOnExit>
            <List className={collapseListClasses}>
              {userProfileMenuList.map(({ link, title, titleMini }, key) => (
                <ListItem className={classes.collapseItem} key={key}>
                  <NavLink to={link} className={collapseNavClasses}>
                    <span className={classes.collapseItemMini}>
                      {titleMini}
                    </span>
                    <ListItemText
                      primary={title}
                      disableTypography
                      className={collapseItemText}
                    />
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </ListItem>
      </List>
    </div>
  );
}

SideBarUser.propTypes = {
  bgColor: PropTypes.oneOf(['blue', 'black', 'white']),
  classes: PropTypes.shape({
    user: PropTypes.string,
    whiteAfter: PropTypes.string,
    photo: PropTypes.string,
    avatarImg: PropTypes.string,
    list: PropTypes.string,
    item: PropTypes.string,
    userItem: PropTypes.string,
    itemLink: PropTypes.string,
    userCollapseButton: PropTypes.string,
    caret: PropTypes.string,
    caretActive: PropTypes.string,
    userCaret: PropTypes.string,
    userItemText: PropTypes.string,
    collapseList: PropTypes.string,
    collapseItem: PropTypes.string,
    userCollapseLinks: PropTypes.string,
    collapseItemMini: PropTypes.string,
    itemText: PropTypes.string,
    itemTextMini: PropTypes.string,
    collapseItemText: PropTypes.string,
    collapseItemTextMini: PropTypes.string,
  }),
  avatar: PropTypes.string,
  miniActive: PropTypes.bool,
  miniActiveState: PropTypes.bool,
};
export default SideBarUser;
