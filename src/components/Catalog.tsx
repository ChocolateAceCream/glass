import React from 'react';

import { Link } from '@mui/material';

import config from '../config/index.json';

const Catalog = () => {
  const { catalog } = config;
  const { title, subtitle, description, items: catalogList } = catalog;
  return (
    <div className={`py-12 bg-background`} id="catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {catalogList.map((feature) => (
              <div
                key={feature.name}
                className="relative min-h-[60px] flex items-center justify-center border-2 border-red-500 text-red-500 hover:bg-red-100  hover:text-red-700 transition-colors duration-300 "
              >
                <Link
                  href={feature.url}
                  underline="none"
                  className=" text-lg font-semibold py-6 px-8 rounded-md hover:border-b-0 text-red-500"
                >
                  {feature.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
