import React, { useState } from 'react';

import { TextField, InputAdornment, MenuItem, Link } from '@mui/material';

const glassTypeOptions = [
  {
    value: 'Float',
    label: 'Float',
  },
  {
    value: 'Tempered',
    label: 'Tempered',
  },
];

const Pricing = () => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [glassType, setGlassType] = useState<string>('Tempered');
  const [price, setPrice] = useState<number>(0);

  const calculatePrice = (h: number, w: number, t: string) => {
    let newPrice = 0;
    if (h > 0 && w > 0) {
      newPrice = h * w;
      if (t === 'Tempered') {
        newPrice *= 2;
      } else {
        newPrice *= 4;
      }
    }
    setPrice(newPrice);
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseFloat(event.target.value) || 0; // Convert to number
    setHeight(newHeight);
    calculatePrice(newHeight, width, glassType);
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseFloat(event.target.value) || 0; // Convert to number
    setWidth(newWidth);
    calculatePrice(height, newWidth, glassType);
  };

  const handleGlassTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newGlassType = event.target.value;
    setGlassType(newGlassType);
    calculatePrice(height, width, newGlassType);
  };

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          Quick Estimate
        </h1>
        <div className={`w-full`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center my-12 sm:my-4`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-4 text-3xl font-bold text-center`}>
                <TextField
                  label="Width"
                  id="outlined-start-adornment"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">Inch</InputAdornment>
                      ),
                    },
                    htmlInput: {
                      min: 1, // Minimum value to ensure only positive numbers
                      step: 1, // Step value to ensure only integer numbers
                      inputMode: `"numeric"`, // Mobile-friendly numeric keyboard
                    },
                  }}
                  type="number"
                  style={{ width: '90%' }}
                  onChange={handleWidthChange}
                />
              </div>
              <div className={`p-4 text-3xl font-bold text-center`}>
                <TextField
                  label="Height"
                  id="outlined-start-adornment"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">Inch</InputAdornment>
                      ),
                    },
                    htmlInput: {
                      min: 1, // Minimum value to ensure only positive numbers
                      step: 1, // Step value to ensure only integer numbers
                      inputMode: `'numeric'`, // Mobile-friendly numeric keyboard
                    },
                  }}
                  type="number"
                  style={{ width: '90%' }}
                  onChange={handleHeightChange}
                />
              </div>
              <div className={`p-4 text-3xl font-bold text-center`}>
                <TextField
                  id="outlined-select-glass-type"
                  select
                  label="Glass Type"
                  defaultValue="Tempered"
                  helperText="Please select glass type"
                  style={{ width: '90%' }}
                  onChange={handleGlassTypeChange}
                >
                  {glassTypeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                Estimated Cost: ${price}
                {/* <span className={`text-base`}> {firstPlan?.priceDetails}</span> */}
              </div>
              <div>
                For detailed quote, please fill the&nbsp;
                <Link
                  href="/assets/documents/quote_form.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  form
                </Link>
                &nbsp; and email back to us
              </div>
            </div>
          </div>
          {/* <div
            className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`w-full p-8 text-3xl font-bold text-center`}>
                {secondPlan?.name}
              </div>
              <div
                className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {secondPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${secondPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div className={`w-full pt-6 text-4xl font-bold text-center`}>
                {secondPlan?.price}
                <span className={`text-base`}> {secondPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {thirdPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {thirdPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${thirdPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {thirdPlan?.price}
                <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
