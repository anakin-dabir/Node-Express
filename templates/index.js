import config from '../config/config';

export default () => {
    return (`
            <!doctype html>
            <html lang="en">

                <head>
                    <meta charset="utf-8">
                        <title>MERN Template Rendering</title>
                </head>

                <body>
                    <div id="root">Server On http://localhost:${config.port}</div>
                </body>

            </html>`
    )
}