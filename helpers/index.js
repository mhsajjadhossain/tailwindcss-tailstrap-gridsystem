/**
 * Title: Generate columns
 * Description: generate columns for styles.
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sat,2022-08-27
 * Time: 14:34:11.000-05:00
 */

/**
 * @method generateColumns()
 * @des generate column width classes
 */
const generateColumns = () => {
  const columnCount = Array.from(Array(12).keys());
  const columnStyles = {};
  columnCount.map((item, index) => {
    columnStyles[`.col-${index + 1}`] = {
      width: `${(100 / 12) * (index + 1)}%`,
    };
  });
  return columnStyles;
};
/**
 * @method generateOffset()
 * @des generate column width classes
 */
const generateOffset = () => {
  const columnCount = Array.from(Array(12).keys());
  const columnStyles = {};
  columnCount.map((item, index) => {
    columnStyles[`.offset-${index + 1}`] = {
      marginLeft: `${(100 / 12) * (index + 1)}%`,
    };
  });
  return columnStyles;
};

module.exports = { generateColumns, generateOffset };
