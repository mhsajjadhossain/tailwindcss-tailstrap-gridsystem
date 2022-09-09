/**
 * Title: Helper Test
 * Description: test file for testing helpers methods
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sat,2022-09-10
 * Time: 01:01:19.000-05:00
 */

const { generateColumns, generateOffset } = require("../helpers");

describe("Generate column method", () => {
  it("is generating 12 column object", () => {
    let columnObject = generateColumns();
    expect(Object.keys(columnObject).length).toBe(12);
  });

  it("is it generating valid columns", () => {
    let columnObject = generateColumns();
    const columnCount = Array.from(Array(12).keys());

    columnCount.map((item, index) => {
      expect(columnObject[`.col-${index + 1}`].width).toBe(
        `${(100 / 12) * (index + 1)}%`
      );
    });
  });
});

describe("Generate Offset method", () => {
  it("is generating 12 column offset object", () => {
    let offsetObject = generateOffset();
    expect(Object.keys(offsetObject).length).toBe(12);
  });

  it("is it generating valid offset", () => {
    let offsetObject = generateOffset();
    const columnCount = Array.from(Array(12).keys());

    columnCount.map((item, index) => {
      expect(offsetObject[`.offset-${index + 1}`].marginLeft).toBe(
        `${(100 / 12) * (index + 1)}%`
      );
    });
  });
});
