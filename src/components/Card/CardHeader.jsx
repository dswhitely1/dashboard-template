import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

function cardHeaders(theme, key) {
  return {
    color: theme.dashboard.palette.whiteColor,
    '&:not($cardHeaderIcon)': {
      background: theme.dashboard.cardHeader[key].background,
      boxShadow: theme.dashboard.cardHeader[key].boxShadow,
    },
  };
}

const useStyles = makeStyles(theme => ({
  cardHeader: {
    padding: '0.75rem 1.25rem',
    marginBottom: 0,
    borderBottom: 'none',
    background: 'transparent',
    zIndex: 3,
    '&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$secondaryCardHeader': {
      margin: '0 15px',
      padding: 0,
      position: 'relative',
      color: theme.dashboard.palette.whiteColor,
    },
    '&:first-child': {
      borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
    },
    '&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$secondaryCardHeader': {
      '&:not($cardHeaderIcon)': {
        borderRadius: 3,
        marginTop: -20,
        padding: 15,
      },
    },
    '&$cardHeaderStats svg': {
      fontSize: 36,
      lineHeight: '56px',
      textAlign: 'center',
      width: 36,
      height: 36,
      margin: '10px 10px 4px',
    },
    '&$cardHeaderStats i,&$cardHeaderStats .material-icons': {
      fontSize: 36,
      lineHeight: '56px',
      width: 56,
      height: 56,
      textAlign: 'center',
      overflow: 'unset',
      marginBottom: 1,
    },
    '&$cardHeaderStats&$cardHeaderIcon': {
      textAlign: 'right',
    },
  },
  cardHeaderPlain: {
    marginLeft: 0,
    marginRight: 0,
    '&$cardHeaderImage': {
      margin: '0 !important',
    },
  },
  cardHeaderImage: {
    position: 'relative',
    padding: 0,
    zIndex: 1,
    '& img': {
      width: '100%',
      borderRadius: 6,
      pointerEvents: 'none',
      boxShadow: `0 5px 15px -8px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.24), 0 8px 10px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.2)`,
    },
    '& a': {
      display: 'block',
    },
  },
  cardHeaderContact: {
    margin: '0 15px',
    marginTop: -20,
  },
  cardHeaderSignUp: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: -40,
    padding: '20px 0',
    width: '100%',
    marginBottom: 15,
  },
  cardHeaderStats: {
    '& $cardHeaderIcon': {
      textAlign: 'right',
    },
    '& h1,& h2,& h3,& h4,& h5,& h6': {
      margin: 0,
    },
  },
  cardHeaderIcon: {
    '&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$secondaryCardHeader': {
      background: 'transparent',
      boxShadow: 'none',
    },
    '& i, & .material-icons': {
      width: 33,
      height: 33,
      textAlign: 'center',
      lineHeight: '33px',
    },
    '& svg': {
      width: 24,
      height: 24,
      textAlign: 'center',
      lineHeight: '33px',
      margin: '5px 4px 0',
    },
  },
  cardHeaderText: {},
  warningCardHeader: cardHeaders(theme, 'warning'),
  successCardHeader: cardHeaders(theme, 'success'),
  dangerCardHeader: cardHeaders(theme, 'danger'),
  infoCardHeader: cardHeaders(theme, 'info'),
  primaryCardHeader: cardHeaders(theme, 'primary'),
  secondaryCardHeader: cardHeaders(theme, 'secondary'),
}));

function CardHeader(props) {
  const {
    children,
    icon,
    stats,
    plain,
    color,
    className,
    contact,
    image,
    signUp,
    text,
    ...rest
  } = props;
  const classes = useStyles();
  const cardHeaderClasses = cx({
    [classes.cardHeader]: true,
    [classes[`${color}CardHeader`]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignUp]: signUp,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [classes.cardHeaderText]: text,
    [className]: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'info',
    'success',
    'warning',
  ]),
  plain: PropTypes.bool,
  image: PropTypes.bool,
  contact: PropTypes.bool,
  signUp: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool,
  text: PropTypes.bool,
};

export default CardHeader;
