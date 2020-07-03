import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import Button from '@material-ui/core/Button';

function colorButton(theme, key) {
  return {
    backgroundColor: theme.dashboard.palette[key][0],
    boxShadow: `0 2px 2px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette[key][0]
    )}, 0.14), 0 3px 1px -2px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette[key][0]
    )}, 0.2), 0 1px 5px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette[key][0]
    )}, 0.12)`,
    '&:hover,&:focus': {
      backgroundColor: theme.dashboard.palette[key][0],
      boxShadow: `0 14px 26px -12px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette[key][0]
      )}, 0.42), 0 4px 23px 0px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.12), 0 8px 10px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette[key][0]
      )}, 0.2)`,
    },
  };
}

function specialColorButton(theme, key) {
  return {
    backgroundColor: theme.dashboard.paletteTwo[key],
    color: theme.dashboard.paletteTwo.white,
    boxShadow: `0 2px 2px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo[key]
    )}, 0.14), 0 3px 1px -2px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo[key]
    )}, 0.2), 0 1px 5px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo[key]
    )}, 0.12)`,
    '&:hover,&:focus,&:visited': {
      backgroundColor: theme.dashboard.paletteTwo[key],
      color: theme.dashboard.paletteTwo.white,
      boxShadow: `0 14px 26px 012px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo[key]
      )}, 0.42), 0 4px 23px 0 rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.12), 0 8px 10px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo[key]
      )}, 0.2)`,
    },
  };
}
const useStyles = makeStyles(theme => ({
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    backgroundColor: theme.dashboard.palette.gray[0],
    color: theme.dashboard.paletteTwo.white,
    boxShadow: `0 2px 2px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.gray[0]
    )}, 0.14), 0 3px 1px -2px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.gray[0]
    )}, 0.2), 0 1px 5px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.gray[0]
    )}, 0.12)`,
    border: 'none',
    borderRadius: 3,
    position: 'relative',
    padding: '12px 30px',
    margin: '.3125rem 1px',
    fontSize: 12,
    fontWeight: 400,
    textTransform: 'uppercase',
    willChange: 'box-shadow, transform',
    transition:
      'box-shadow 0.2s cubic-bezier(0.4,0,1,1), background-color 0.2s cubic-bezier(0.4,0,0.2,1)',
    lineHeight: 1.42857143,
    letterSpacing: 0,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    '&:hover,&:focus': {
      color: theme.dashboard.paletteTwo.white,
      backgroundColor: theme.dashboard.palette.gray[0],
      boxShadow: `0 14px 26px -12px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[0]
      )}, 0.42), 0 4px 23px 0 rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[0]
      )}, 0.12), 0 8px 10px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[0]
      )}, 0.2)`,
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      display: 'inline-block',
      top: 0,
      marginTop: '-1rem',
      marginBottom: '-1rem',
      fontSize: '1.1rem',
      marginRight: 4,
      verticalAlign: 'middle',
    },
    '& svg': {
      position: 'relative',
      display: 'inline-block',
      top: 0,
      width: 18,
      height: 18,
      marginRight: 4,
      verticalAlign: 'middle',
    },
    '&$justIcon': {
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        marginTop: 0,
        position: 'absolute',
        width: '100%',
        transform: 'none',
        left: 0,
        top: 0,
        height: '100%',
        lineHeight: '41px',
        fontSize: 20,
      },
    },
  },
  fullWidth: {
    width: '100%',
  },
  secondary: colorButton(theme, 'secondary'),
  primary: colorButton(theme, 'primary'),
  info: colorButton(theme, 'info'),
  success: colorButton(theme, 'success'),
  warning: colorButton(theme, 'warning'),
  danger: colorButton(theme, 'danger'),
  white: {
    '&,&:focus,&:hover': {
      backgroundColor: theme.dashboard.paletteTwo.white,
      color: theme.dashboard.palette.gray[0],
    },
  },
  twitter: specialColorButton(theme, 'twitter'),
  facebook: specialColorButton(theme, 'facebook'),
  google: specialColorButton(theme, 'google'),
  linkedIn: specialColorButton(theme, 'linkedIn'),
  pinterest: specialColorButton(theme, 'pinterest'),
  youtube: specialColorButton(theme, 'youtube'),
  tumblr: specialColorButton(theme, 'tumblr'),
  behance: specialColorButton(theme, 'behance'),
  dribbble: specialColorButton(theme, 'dribbble'),
  reddit: specialColorButton(theme, 'reddit'),
  github: {
    backgroundColor: theme.dashboard.palette.gray[7],
    color: theme.dashboard.paletteTwo.white,
    boxShadow: `0 2px 2px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.gray[6]
    )}, 0.14), 0 3px 1px -2px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.gray[6]
    )}, 0.2), 0 1px 5px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.gray[6]
    )}, 0.12)`,
    '&:hover,&:focus,&:visited': {
      backgroundColor: theme.dashboard.palette.gray[7],
      color: theme.dashboard.paletteTwo.white,
      boxShadow: `0 14px 26px 012px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[6]
      )}, 0.42), 0 4px 23px 0 rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[6]
      )}, 0.12), 0 8px 10px -5px rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.palette.gray[6]
      )}, 0.2)`,
    },
  },
  simple: {
    '&,&:focus,&:hover': {
      color: theme.dashboard.paletteTwo.white,
      background: 'transparent',
      boxShadow: 'none',
    },
    '&$primary': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.palette.primary[0],
      },
    },
    '&$secondary': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.palette.secondary[0],
      },
    },
    '&$info': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.palette.info[0],
      },
    },
    '&$danger': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.palette.danger[0],
      },
    },
    '&$success': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.palette.success[0],
      },
    },
    '&$warning': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.palette.warning[0],
      },
    },
    '&$twitter': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.paletteTwo.twitter,
      },
    },
    '&$facebook': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.paletteTwo.facebook,
      },
    },
    '&$google': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.paletteTwo.google,
      },
    },
    '&$linkedIn': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.paletteTwo.linkedIn,
      },
    },
    '&$pinterest': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.paletteTwo.pinterest,
      },
    },
    '&$youtube': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.paletteTwo.youtube,
      },
    },
    '&$tumblr': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.paletteTwo.tumblr,
      },
    },
    '&$github': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.palette.gray[7],
      },
    },
    '&$behance': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.paletteTwo.behance,
      },
    },
    '&$dribbble': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.paletteTwo.dribble,
      },
    },
    '&$reddit': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.dashboard.paletteTwo.reddit,
      },
    },
  },
  transparent: {
    '&,&:focus,&:hover': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none',
    },
  },
  disabled: {
    opacity: 0.65,
    pointerEvents: 'none',
  },
  lg: {
    '&$justIcon': {
      '& .fab,& .fas,& .far,& .fal,& svg, & .material-icons': {
        marginTop: -4,
      },
    },
    padding: '1.125rem 2.25rem',
    fontSize: '0.8875rem',
    lineHeight: 1.333333,
    borderRadius: '0.2rem',
  },
  sm: {
    '&$justIcon': {
      '& .fab,& .fas,& .far,& .fal,& svg, & .material-icons': {
        marginTop: 1,
      },
    },
    padding: '0.40625rem 1.25rem',
    fontSize: '0.6875rem',
    lineHeight: 1.5,
    borderRadius: '0.2rem',
  },
  round: { borderRadius: 30 },
  block: {
    width: '100% !important',
  },
  link: {
    '&,&:hover,&:focus': {
      backgroundColor: 'transparent',
      color: theme.dashboard.palette.gray[0],
      boxShadow: 'none',
    },
  },
  justIcon: {
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 20,
    height: 41,
    minWidth: 41,
    width: 41,
    '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
      marginRight: 0,
    },
    '&$lg': {
      height: 57,
      minWidth: 57,
      width: 57,
      lineHeight: '56px',
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: 32,
        lineHeight: '56px',
      },
      '& svg': {
        width: 32,
        height: 32,
      },
    },
    '&$sm': {
      height: 30,
      minWidth: 30,
      width: 30,
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: 17,
        lineHeight: '29px',
      },
      '& svg': {
        width: 17,
        height: 17,
      },
    },
  },
}));

const RegularButton = forwardRef((props, ref) => {
  const classes = useStyles();
  const {
    children,
    color,
    round,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;

  const btnClasses = cx({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });

  return (
    <Button {...rest} ref={ref} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  );
});

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'twitter',
    'facebook',
    'google',
    'linkedIn',
    'pinterest',
    'youtube',
    'tumblr',
    'github',
    'behance',
    'dribbble',
    'reddit',
    'transparent',
  ]),
  size: PropTypes.oneOf(['sm', 'lg']),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  muiClasses: PropTypes.object,
  children: PropTypes.node,
};

export default RegularButton;
