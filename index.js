const plugin = require("tailwindcss/plugin");
const utilityStyles = require("./styles/utilitiesStyles");

const mainStyleMethod = ({ addUtilities }) => {
  //* adding utility classes to utility method
  addUtilities(utilityStyles);
};

module.exports = plugin.withOptions(() => mainStyleMethod);
