/**
 * Title: Utility styles object
 * Description: utility styles object for utility classes
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sat,2022-08-27
 * Time: 14:40:45.000-05:00
 */

const { generateColumns, generateOffset } = require("../helpers");
const columns = generateColumns();
const offsets = generateOffset();

// const { generateColumns } = require("./helpers");
const utilityStyles = {
  "[class*='col-']": {
    padding: "0 15px",
  },
  ".no-gutters": {
    marginLeft: "0",
    marginRight: "0",
  },
  ".no-gutters .col": {
    paddingLeft: "0",
    paddingRight: "0",
  },
  ".no-gutters [class*='col-']": {
    paddingLeft: "0",
    paddingRight: "0",
  },
  ".row": {
    marginLeft: "-15px",
    marginRight: "-15px",
    display: "flex",
    flexWrap: "wrap",
  },
  //   container for regular usese
  ".container": {
    maxWidth: "100%",
    margin: "0 auto",
    "@screen sm": {
      width: "540px",
    },
    "@screen md": {
      width: "720px",
    },
    "@screen lg": {
      width: "960px",
    },
    "@screen xl": {
      width: "1170px",
    },
    "@screen 2xl": {
      width: "1320px",
    },
  },
  ".container-sm": {
    maxWidth: "100%",
    margin: "0 auto",
    "@screen sm": {
      width: "540px",
    },
    "@screen md": {
      width: "720px",
    },
    "@screen lg": {
      width: "960px",
    },
    "@screen xl": {
      width: "1170px",
    },
    "@screen 2xl": {
      width: "1320px",
    },
  },
  ".container-md": {
    maxWidth: "100%",
    margin: "0 auto",
    "@screen sm": {
      width: "100%",
    },
    "@screen md": {
      width: "720px",
    },
    "@screen lg": {
      width: "960px",
    },
    "@screen xl": {
      width: "1170px",
    },
    "@screen 2xl": {
      width: "1320px",
    },
  },
  ".container-lg": {
    maxWidth: "100%",
    margin: "0 auto",
    "@screen sm": {
      width: "100%",
    },
    "@screen md": {
      width: "100%",
    },
    "@screen lg": {
      width: "960px",
    },
    "@screen xl": {
      width: "1170px",
    },
    "@screen 2xl": {
      width: "1320px",
    },
  },
  ".container-xl": {
    maxWidth: "100%",
    margin: "0 auto",
    "@screen sm": {
      width: "100%",
    },
    "@screen md": {
      width: "100%",
    },
    "@screen lg": {
      width: "100%",
    },
    "@screen xl": {
      width: "1170px",
    },
    "@screen 2xl": {
      width: "1320px",
    },
  },
  ".container-xxl": {
    maxWidth: "100%",
    margin: "0 auto",
    "@screen sm": {
      width: "100%",
    },
    "@screen md": {
      width: "100%",
    },
    "@screen lg": {
      width: "100%",
    },
    "@screen xl": {
      width: "100%",
    },
    "@screen 2xl": {
      width: "1320px",
    },
  },
  "container-fluid": {
    width: "100%",
  },
  //   all columns width styles
  ...columns,
  ...offsets,
};
module.exports = utilityStyles;
