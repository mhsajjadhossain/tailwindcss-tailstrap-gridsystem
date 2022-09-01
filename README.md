# Tailstrap-Grid-System!

![enter image description here](https://i.ibb.co/202NCkF/tailstarp-logo.jpg)

**Tailstrap Grid System**- is a plugin that provides a set of utility classes that allows you to use the same 12 column flexbox grid system, containers and rows like bootstrap 5 into your tailwind css projects.The installation guide and use guides are down below.

## Installation

For getting started with **tailstrap-grid-system** you just need to run the command below.

    npm i @mhsajjadhossain/tailwindcss-tailstrap-grid-system

## Configuring

Then add the plugin to your `tailwind.config.js` file:

    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('tailwindcss-tailstrap-grid-system'),
        // ...
      ],
    };

Add `base`,`component`,`utilities` layer into your base css file:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

After this simple configuring you are ready to use Bootstrap 5 flexbox grid into your regular tailwind css.

## License

**tailwindcss-tailstrap-grid-system** is licensed under the MIT License.
