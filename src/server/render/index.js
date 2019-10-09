import getManifest from '../getManifest';
import {} from 'dotenv/config';

const files = getManifest();

const render = (html, preloadedState) => {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Platzi Video</title>
      <link rel="stylesheet" href="${
        isProd ? files['main.css'] : './assets/app.css'
      }" type="text/css"></link>
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c',
          )}
        </script>
        <script "${
          isProd ? files['main.js'] : './assets/app.js'
        }" type="text/javascript"></script>
        <script "${
          isProd ? files['vendors.js'] : './assets/vendor.js'
        }" type="text/javascript"></script>
    </body>
    </html>
  `;
};

export default render;
