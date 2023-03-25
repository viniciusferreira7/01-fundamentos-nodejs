export function buildRoutePath(path){
  const routeParametersPath = /:([a-zA-z]+)/g

  const pathWithParameters = path.replaceAll(routeParametersPath, '(?<$1>[a-z0-9\-_]+)')


  const pathRegex = new RegExp(`^${pathWithParameters}`)

  return pathRegex

}