import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';

function ThemeProvider(props) {
  const { children } = props;

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
