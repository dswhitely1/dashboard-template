import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardBody: {
    padding: '0.9375rem 20px',
    flex: '1 1 auto',
    WebkitFlex: 1,
    position: 'relative',
  },
  cardBodyBackground: {
    position: 'relative',
    zIndex: 2,
    minHeight: 280,
    paddingTop: 40,
    paddingBottom: 40,
    maxWidth: 440,
    margin: '0 auto',
  },
  cardBodyPlain: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  cardBodyFormHorizontal: {
    paddingLeft: 15,
    paddingRight: 15,
    '& form': {
      margin: 0,
    },
  },
  cardPricing: {
    padding: '15px !important',
    margin: '0 !important',
  },
  cardSignUp: {
    padding: '0 30px',
  },
  cardBodyColor: {
    borderRadius: 6,
    '& h1,& h2,& h3': {
      '& small': {
        color: `rgba(${theme.dashboard.hexToRgb(
          theme.dashboard.paletteTwo.white
        )}, 0.8)`,
      },
    },
  },
  cardBodyProfile: {
    marginTop: 15,
  },
  cardBodyCalendar: {
    padding: '0 !important',
  },
}));

function CardBody(props) {
  const classes = useStyles();
  const {
    children,
    profile,
    plain,
    className,
    background,
    calendar,
    color,
    formHorizontal,
    pricing,
    signUp,
    ...rest
  } = props;

  const cardBodyClasses = cx({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignUp]: signUp,
    [classes.cardBodyColor]: color,
    [classes.cardBodyProfile]: profile,
    [classes.cardBodyCalendar]: calendar,
    [className]: className !== undefined,
  });

  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  background: PropTypes.bool,
  plain: PropTypes.bool,
  formHorizontal: PropTypes.bool,
  pricing: PropTypes.bool,
  signUp: PropTypes.bool,
  color: PropTypes.bool,
  profile: PropTypes.bool,
  calendar: PropTypes.bool,
  children: PropTypes.node,
};

export default CardBody;
