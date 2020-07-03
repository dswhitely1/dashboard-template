import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import { InputAdornment, Icon } from '@material-ui/core';

import Face from '@material-ui/icons/Face';
import LockOutlined from '@material-ui/icons/LockOutlined';

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';

const useStyles = makeStyles(theme => ({
  container: {
    ...theme.dashboard.container.default,
    zIndex: 4,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 100,
    },
  },
  cardTitle: {
    ...theme.dashboard.cards.title,
    color: theme.dashboard.paletteTwo.white,
  },
  textCenter: {
    textAlign: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center !important',
  },
  customButtonClass: {
    '&,&:focus,&:hover': {
      color: theme.dashboard.paletteTwo.white,
    },
    marginLeft: 5,
    marginRight: 5,
  },
  inputAdornment: {
    marginRight: 18,
  },
  inputAdornmentIcon: {
    color: theme.dashboard.palette.gray[6],
  },
  cardHidden: {
    opacity: '0',
    transform: 'translate3d(0, -60px, 0)',
  },
  cardHeader: {
    marginBottom: 20,
  },
  socialLine: {
    padding: '0.9375rem 0',
  },
}));

function LoginPage() {
  const [cardAnimation, setCardAnimation] = useState('cardHidden');
  useEffect(() => {
    const id = setTimeout(() => setCardAnimation(''), 700);
    return () => window.clearTimeout(id);
  });
  const classes = useStyles();
  const cardHeaderClasses = cx(classes.cardHeader, classes.textCenter);
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login className={classes[cardAnimation]}>
              <CardHeader color="secondary" className={cardHeaderClasses}>
                <h4 className={classes.cardTitle}>Log IN</h4>
                <div className={classes.socialLine}>
                  {[
                    'fab fa-github',
                    'fab fa-linkedin',
                    'fab fa-google-plus',
                  ].map((iconClass, key) => (
                    <Button
                      color="transparent"
                      justIcon
                      key={key}
                      className={classes.customButtonClass}
                    >
                      <i className={iconClass} />
                    </Button>
                  ))}
                </div>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Username"
                  id="username"
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomInput
                  labelText="Username"
                  id="password"
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockOutlined className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    type: 'password',
                    autoComplete: 'off',
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button color="secondary" simple size="lg" block>
                  Let's Go
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default LoginPage;
