import React from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, Icon } from '@material-ui/core';
import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
import Face from '@material-ui/icons/Face';
import Lock from '@material-ui/icons/LockOutlined';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import CustomInput from '../../components/CustomInput/CustomInput';
import InfoArea from '../../components/InfoArea/InfoArea';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';

const useStyles = makeStyles(theme => ({
  cardTitle: {
    ...theme.dashboard.cards.title,
    textAlign: 'center',
  },
  container: {
    ...theme.dashboard.container.default,
    position: 'relative',
    zIndex: 3,
  },
  cardSignUp: {
    borderRadius: 6,
    boxShadow: `0 16px 24px 2px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.black
    )}, 0.14), 0 6px 30px 5px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.black
    )}, 0.12), 0 8px 10px -5px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.paletteTwo.black
    )}, 0.2)`,
    marginBottom: 100,
    padding: '40px 0',
    marginTop: '15vh',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  form: {
    padding: '0 20px',
    position: 'relative',
  },
  socialTitle: {
    fontSize: 18,
  },
  inputAdornment: {
    marginRight: 18,
    position: 'relative',
  },
  inputAdornmentIcon: {
    color: theme.dashboard.palette.gray[6],
  },
  customFormControlClasses: {
    margin: '0 12px',
  },
  buttonContainer: {
    paddingTop: 27,
  },
}));

function RegisterPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} md={10}>
          <Card className={classes.cardSignUp}>
            <h2 className={classes.cardTitle}>Register</h2>
            <CardBody>
              <GridContainer justify="center">
                <GridItem xs={12} md={5}>
                  <InfoArea
                    title="Marketing"
                    description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                    icon={Timeline}
                    iconColor="secondary"
                  />
                  <InfoArea
                    title="Fully Coded in HTML5"
                    description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                    icon={Code}
                    iconColor="primary"
                  />
                  <InfoArea
                    title="Built Audience"
                    description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                    icon={Group}
                    iconColor="info"
                  />
                </GridItem>
                <GridItem xs={12} sm={8} md={5}>
                  <div className={classes.center}>
                    <Button justIcon round color="github">
                      <i className="fab fa-github" />
                    </Button>
                    {` `}
                    <Button justIcon round color="linkedIn">
                      <i className="fab fa-linkedin" />
                    </Button>
                    {` `}
                    <Button justIcon round color="google">
                      <i className="fab fa-google" />
                    </Button>
                    {` `}
                    <h4 className={classes.socialTitle}>or be classical</h4>
                  </div>
                  <form className={classes.form}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: 'First Name...',
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Lock className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: 'Password...',
                        type: 'password',
                        autoComplete: 'off',
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Lock className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: 'Confirm Password...',
                        type: 'password',
                        autoComplete: 'off',
                      }}
                    />
                    <div
                      className={cx(classes.center, classes.buttonContainer)}
                    >
                      <Button round color="primary">
                        Get Started
                      </Button>
                    </div>
                  </form>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default RegisterPage;
