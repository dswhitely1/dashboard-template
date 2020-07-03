import React from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Link, List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  block: {},
  left: {
    float: 'left !important',
    display: 'block',
  },
  right: {
    margin: 0,
    fontSize: 14,
    float: 'right !important',
    padding: 15,
  },
  footer: {
    bottom: 0,
    borderTop: `1px solid ${theme.dashboard.palette.gray[15]}`,
    padding: '15px 0',
    ...theme.dashboard.font,
    zIndex: 4,
  },
  container: {
    zIndex: 3,
    ...theme.dashboard.container.default,
    position: 'relative',
  },
  containerFluid: {
    zIndex: 3,
    ...theme.dashboard.container.fluid,
    position: 'relative',
  },
  a: {
    color: theme.dashboard.palette.primary[0],
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
  list: {
    marginBottom: 0,
    padding: 0,
    marginTop: 0,
  },
  inlineBlock: {
    display: 'inline-block',
    padding: 0,
    width: 'auto',
  },
  whiteColor: {
    '&,&:hover,&:focus': {
      color: theme.dashboard.paletteTwo.white,
    },
  },
}));

const footerLinks = [
  {
    link: '#',
    title: 'Home',
  },
  {
    link: 'https://www.reactwizard.com',
    title: 'Company',
  },
  {
    link: 'https://www.donwhitely.com',
    title: 'Portfolio',
  },
  {
    link: '#',
    title: 'Blog',
  },
];

function Footer(props) {
  const classes = useStyles();
  const { fluid, white } = props;
  const container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  const anchorClasses = cx({
    [classes.a]: true,
    [classes.whiteColor]: white,
  });
  const blockClasses = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {footerLinks.map(({ title, link }, key) => (
              <ListItem className={classes.inlineBlock}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={blockClasses}
                >
                  {title}
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
        <p className={classes.right}>
          &copy; {new Date().getFullYear()}{' '}
          <Link
            href="https://www.creative-tim.com?ref=mdpr-footer"
            className={anchorClasses}
            target="_blank"
          >
            Creative Tim
          </Link>
          , made with love for a better web
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  white: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
