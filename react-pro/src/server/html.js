export default function html(options) {
  const {
    app = 'main',
    title = 'AndrésTEST',
    stylesheet = '/css/style.css',
    markup,
    initialState
  } = options;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    <link rel="stylesheet" href="${stylesheet}"/>
  </head>
  <body>
    <div id="root">${markup}</div>
    <script>
      window.initialState = ${JSON.stringify(initialState)}
    </script>
    <script src="/app/${app}.min.js"></script>
  </body>
  </html>
  `;
}
