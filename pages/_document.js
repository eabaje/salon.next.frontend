//import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Html, Head, Main, NextScript } from "next/document";

import React from "react";
export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            <meta name="author" content="Phoenixcoded" />

            {/*Favicon icon */}
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="http://localhost:3000/assets/style.css"
            />
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
            <link
              rel="stylesheet"
              type="text/css"
              href="/assets/css/custom-style.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="/assets/css/loaders.css"
            />

            <link rel="stylesheet" href="/assets/css/themify-icons.css" />

            <link rel="stylesheet" href="/assets/css/flaticon.css" />

            <link rel="stylesheet" href="/assets/css/nice-select.css" />

            <link
              rel="stylesheet"
              type="text/css"
              href="/assets/css/gijgo.min.css"
            />

            <link
              rel="stylesheet"
              type="text/css"
              href="/assets/css/font-awesome.min.css"
            />
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.6.2/themes/classic.css"
              rel="stylesheet"
            />
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.6.2/themes/classic.time.css"
              rel="stylesheet"
            />
            {/* <link rel="stylesheet" href="/assets/css/base.css" /> */}
          </Head>
          <body>
            <Main />
            <NextScript />

            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>

            <script src="/assets/js/gijgo.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.6.2/picker.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.6.2/picker.date.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.6.2/picker.time.js"></script>

            <script src="/assets/js/popper.min.js"></script>
            <script src="/assets/js/bootstrap.min.js"></script>
          </body>
        </Html>
      </>
    );
  }
}
// MyDocument.getInitialProps = async (ctx) => {
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;
//   ctx.renderPage = () => {
//     return originalRenderPage({
//       enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//     });
//   };
//   const initialProps = await Document.getInitialProps(ctx);
//   return {
//     ...initialProps,
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       sheets.getStyleElement(),
//     ],
//   };
// };
