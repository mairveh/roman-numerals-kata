//Arrange
const std2roman = require("../src/std2roman_nums");

describe("test converting from standard to roman numerals", () => {
  it("check invalid conversion for 0->undefined", () => {
    const input = "0";
    const expectedResult = undefined;
    //Act
    const result = std2roman(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check invalid conversion for numbers outside of the valid range 1...3000, 3001->undefined", () => {
    const input = "3001";
    const expectedResult = undefined;
    //Act
    const result = std2roman(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check 1->I conversion", () => {
    const input = 1;
    const expectedResult = "I";
    //Act
    const result = std2roman(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check 5->V conversion", () => {
    const input = 5;
    const expectedResult = "V";
    //Act
    const result = std2roman(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check 10->X conversion", () => {
    const input = 10;
    const expectedResult = "X";
    //Act
    const result = std2roman(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check 50->L conversion", () => {
    const input = 50;
    const expectedResult = "L";
    //Act
    const result = std2roman(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check 100->C conversion", () => {
    const input = 100;
    const expectedResult = "C";
    //Act
    const result = std2roman(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check 500->D conversion", () => {
    const input = 500;
    const expectedResult = "D";
    //Act
    const result = std2roman(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check 1000->M conversion", () => {
    const input = 1000;
    const expectedResult = "M";
    //Act
    const result = std2roman(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
});