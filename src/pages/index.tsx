import React from 'react';

import Script from 'next/script';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Catalog from '../components/Catalog';
import Contact from '../components/Contact';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
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
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Catalog />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Contact />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
