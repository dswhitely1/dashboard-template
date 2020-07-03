import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardFooter: {
    padding: 0,
    paddingTop: 10,
    margin: '0 15px 10px',
    borderRadius: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'transparent',
    border: 0,
  },
  cardFooterPlain: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'transparent',
  },
  cardFooterProfile: {
    marginTop: -15,
  },
  cardFooterPricing: {
    zIndex: 2,
  },
  cardFooterTestimonial: {
    display: 'block',
  },
  cardFooterStats: {
    borderTop: `1px solid ${theme.dashboard.palette.gray[8]}`,
    marginTop: 20,
    '& svg': {
      position: 'relative',
      top: 4,
      marginRight: 3,
      marginLeft: 3,
      width: 16,
      height: 16,
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      top: 4,
      marginLeft: 3,
      marginRight: 3,
      fontSize: 16,
      lineHeight: '16px',
    },
  },
  cardFooterChart: {
    borderTop: `1px solid ${theme.dashboard.palette.gray[8]}`,
  },
}));

function CardFooter(props) {
  const classes = useStyles();
  const {
    chart,
    stats,
    profile,
    plain,
    children,
    className,
    pricing,
    product,
    testimonial,
    ...rest
  } = props;
  const cardFooterClasses = cx({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart || product,
    [className]: className !== undefined,
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  stats: PropTypes.bool,
  chart: PropTypes.bool,
  product: PropTypes.bool,
  children: PropTypes.node,
};

export default CardFooter;
