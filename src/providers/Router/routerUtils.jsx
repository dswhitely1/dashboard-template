import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';

export const useRouterUtils = () => {
  const getRoutes = useCallback(
    (routes, checkLayout) =>
      routes.map(
        ({ collapse, views, layout, path, component: Component }, key) => {
          if (collapse) {
            return getRoutes(views, checkLayout);
          }
          if (layout === checkLayout) {
            return (
              <Route
                path={`${layout}${path}`}
                component={Component}
                key={key}
              />
            );
          }
          return null;
        }
      ),
    []
  );

  const getActiveRoute = useCallback(routes => {
    const activeRoute = 'Default Brand Text';
    for (const route of routes) {
      const { collapse, views, layout, path, name } = route;
      if (collapse) {
        const collapseActiveRoute = getActiveRoute(views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (window.location.href.indexOf(`${layout}${path}`) > -1) {
        return name;
      }
    }
    return activeRoute;
  }, []);

  return [getRoutes, getActiveRoute];
};
