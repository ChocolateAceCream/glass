import { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Script
      id="zoho-salesiq"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
              var $zoho = $zoho || {};
              $zoho.salesiq = $zoho.salesiq || {
                widgetcode: "735d5da750431b6b984546c4b0c692feaeefb8a8421e7d4353878dfcb3dcd9aa",
                values: {},
                ready: function () {}
              };
              (function() {
                var d = document;
                var s = d.createElement("script");
                s.type = "text/javascript";
                s.id = "zsiqscript";
                s.defer = true;
                s.src = "https://salesiq.zohocloud.ca/widget";
                var t = d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s, t);

                // Create the widget container div safely
                var widgetDiv = d.createElement("div");
                widgetDiv.id = "zsiqwidget";
                d.body.appendChild(widgetDiv);
              })();
            `,
      }}
    />
  </>
);

export default MyApp;
