import React from 'react';
import PropTypes from 'prop-types';
import RouterProvider from './Router/RoutingProvider';
import ThemeProvider from './Theme/ThemeProvider';

function Providers(props) {
  const { children } = props;

  return (
    <RouterProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </RouterProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
