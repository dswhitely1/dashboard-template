import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  disabled: {
    '&:before': {
      borderColor: 'transparent !important',
    },
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: `${theme.dashboard.palette.gray[4]} !important`,
      borderWidth: '1px !important',
    },
    '&:after': {
      borderColor: theme.dashboard.palette.primary[0],
    },
    '& + p': {
      fontWeight: 300,
    },
  },
  underlineError: {
    '&:after': {
      borderColor: theme.dashboard.palette.danger[0],
    },
  },
  underlineSuccess: {
    '&:after': {
      borderColor: theme.dashboard.palette.success[0],
    },
  },
  labelRoot: {
    ...theme.dashboard.font,
    color: `${theme.dashboard.palette.gray[3]} !important`,
    fontWeight: 400,
    lineHeight: 1.42857,
    top: 10,
    letterSpacing: 'unset',
    '& + $underline': {
      marginTop: 0,
    },
  },
  labelRootError: {
    color: `${theme.dashboard.palette.danger[0]} !important`,
  },
  labelRootSuccess: {
    color: `${theme.dashboard.palette.success[0]} !important`,
  },
  formControl: {
    margin: '0 0 17px 0',
    paddingTop: 27,
    position: 'relative',
    verticalAlign: 'unset',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: theme.dashboard.palette.gray[14],
    },
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      backgroundColor: theme.dashboard.paletteTwo.white,
    },
    '&:after': {
      backgroundColor: theme.dashboard.paletteTwo.white,
    },
  },
  input: {
    color: theme.dashboard.palette.gray[14],
    height: 'unset',
    '&,&::placeholder': {
      fontSize: 14,
      fontFamily: theme.dashboard.font.fontFamily,
      fontWeight: 400,
      lineHeight: 1.42857,
      opacity: 1,
    },
    '&::placeholder': {
      color: theme.dashboard.palette.gray[3],
    },
  },
  whiteInput: {
    '&,&::placeholder': {
      color: theme.dashboard.paletteTwo.white,
      opacity: 1,
    },
  },
}));

function CustomInput(props) {
  const classes = useStyles();
  const {
    labelProps,
    error,
    formControlProps,
    helperText,
    id,
    inputProps,
    inputRootCustomClasses,
    labelText,
    success,
    white,
  } = props;
  const labelClasses = cx({
    [classes.labelRoot]: true,
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = cx({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = cx({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = cx({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  const formControlClasses = cx({
    [formControlProps.className]: true,
    [classes.formControl]: true,
  });
  const helpTextClasses = cx({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });
  const newInputProps = {
    maxLength:
      inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
    minLength:
      inputProps && inputProps.minLength ? inputProps.minLength : undefined,
  };

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText && (
        <InputLabel className={labelClasses} htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      )}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
        inputProps={newInputProps}
      />
      {helperText && (
        <FormHelperText id={`${id}-text`} className={helpTextClasses}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  helperText: PropTypes.node,
};

export default CustomInput;
