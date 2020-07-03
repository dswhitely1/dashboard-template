import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

function RouterProvider(props) {
  const { children } = props;
  return <Router>{children}</Router>;
}

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouterProvider;
