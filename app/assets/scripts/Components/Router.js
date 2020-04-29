class Router {
  constructor(routes, app) {
    this.routes = routes;
    this.app = app;
    this.loadInitialRoute();
  }

  loadRoute(...urlParts) {
    const matchedRoute = this.matchUrlToRoute(urlParts);
    const url = "#" + `${urlParts.join('/')}`;
    history.pushState({}, '', url);

    this.app.ui.setView(matchedRoute.template);
  }

  matchUrlToRoute(urlParts) {
    const matchedRoute = this.routes.find(route => {
      const routePathParts = route.path.split('/').slice(1); // all urls start with /
      if (routePathParts.length !== urlParts.length) { // doesn't match
        return false;
      }

      return routePathParts
        .every((routePathParts, i) => routePathParts === urlParts[i]); //if every part matches, we have our url.
    });

    return matchedRoute;
  }

  loadInitialRoute() {
    const pathNamesplit = window.location.pathname.split('/'),
    pathParts = pathNamesplit.length > 1 ? pathNamesplit.slice(1) : '';

    this.loadRoute(...pathParts);
  }
}

export default Router;