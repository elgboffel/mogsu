const staticPaths = new Set(["/","/diva-sonum-rupit-umbras-caerulus-siderea/","/favicon.svg","/fonts/poppins-400.woff2","/fonts/poppins-500.woff2","/fonts/poppins-700.woff2","/in-istis/","/manifest.json","/murmure-splendidus-invidia-merui-usus-flammas-clamoribus/","/q-manifest.json","/robots.txt","/service-worker.js","/sitemap.xml","/sors-ventos/","/test/"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };