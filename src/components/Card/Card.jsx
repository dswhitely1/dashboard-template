import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const cardColor = (theme, key) => ({
  background: `linear-gradient(60deg, ${theme.dashboard.palette[key][1]}, ${theme.dashboard.palette[key][4]})`,
  '& h1 small': {
    color: `rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.white
    )}, 0.8)`,
  },
  color: theme.dashboard.paletteTwo.white,
});

const useStyles = makeStyles(theme => ({
  card: {
    border: 0,
    marginBottom: 30,
    marginTop: 30,
    borderRadius: 6,
    color: `rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.black
    )}, 0.87)`,
    background: theme.dashboard.paletteTwo.white,
    width: '100%',
    boxShadow: `0 1px 4px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.black
    )}, 0.14)`,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    wordWrap: 'break-word',
    fontSize: '0.875rem',
  },
  cardPlain: {
    background: 'transparent',
    boxShadow: 'none',
  },
  cardProfile: {
    marginTop: 30,
    textAlign: 'center',
  },
  cardBlog: {
    marginTop: 60,
  },
  cardRaised: {
    boxShadow: `0 16px 38px -12px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.black
    )}, 0.56), 0 4px 25px 0 rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.black
    )}, 0.12), 0 8px 10px -5px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.black
    )},0.2`,
  },
  cardBackground: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    textAlign: 'center',
    '&:after': {
      positon: 'absolute',
      zIndex: 1,
      width: '100%',
      height: '100%',
      display: 'block',
      left: 0,
      top: 0,
      content: '""',
      backgroundColor: `rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.56)`,
      borderRadius: 6,
    },
    '& small': {
      color: `rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.white
      )}, 0.7) !important`,
    },
  },
  cardPricing: {
    textAlign: 'center',
    '&:after': {
      backgroundColor: `rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.black
      )}, 0.7) !important`,
    },
    '& ul': {
      listStyle: 'none',
      padding: 0,
      maxWidth: 240,
      margin: '10px auto',
      '& li': {
        color: theme.dashboard.palette.gray[0],
        textAlign: 'center',
        padding: '12px 0',
        borderBottom: `1px solid rgba(${theme.dashboard.hexToRgb(
          theme.dashboard.palette.gray[0]
        )}, 0.13)`,
        '&:last-child': {
          border: 0,
        },
        '& b': {
          color: theme.dashboard.palette.gray[2],
        },
        '& h1': {
          marginTop: 30,
          '& small': {
            display: 'inline-block',
            height: 0,
            fontSize: 18,
            '&:first-child': {
              position: 'relative',
              top: -17,
              fontSize: 26,
            },
          },
        },
        '& svg, & .fab,& .fas,& .far,& .fal,& .material-icons': {
          position: 'relative',
          top: 7,
        },
      },
    },
  },
  cardPricingColor: {
    '& ul li': {
      color: theme.dashboard.paletteTwo.white,
      borderColor: `rgba(${theme.dashboard.hexToRgb(
        theme.dashboard.paletteTwo.white
      )}, 0.3)`,
      '& b,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
        color: theme.dashboard.paletteTwo.white,
        fontWeight: 700,
      },
    },
  },
  cardProduct: { marginTop: 30 },
  primary: cardColor(theme, 'primary'),
  secondary: cardColor(theme, 'secondary'),
  info: cardColor(theme, 'info'),
  success: cardColor(theme, 'success'),
  warning: cardColor(theme, 'warning'),
  danger: cardColor(theme, 'danger'),
  cardChart: {
    '& p': {
      marginTop: 0,
      paddingTop: 0,
    },
  },
  cardLogin: {
    transform: `translate3d(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.black
    )})`,
    transition: 'all 300ms linear',
  },
}));

function Card(props) {
  const classes = useStyles();
  const {
    children,
    background,
    blog,
    chart,
    className,
    color,
    login,
    plain,
    pricing,
    product,
    profile,
    testimonial,
    raised,
    ...rest
  } = props;

  const cardClasses = cx({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardChart]: chart,
    [classes.cardProduct]: product,
    [classes.cardLogin]: login,
    [className]: className !== undefined,
  });

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  blog: PropTypes.bool,
  background: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
  ]),
  product: PropTypes.bool,
  chart: PropTypes.bool,
  login: PropTypes.bool,
  raised: PropTypes.bool,
  children: PropTypes.node,
};

export default Card;
