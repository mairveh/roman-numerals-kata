//Arrange
const roman2std = require("../src/roman2std_nums");

describe("test converting from roman to standard numerals", () => {
  it("check invalid conversion for A->undefined", () => {
    const input = "A";
    const expectedResult = undefined;
    //Act
    const result = roman2std(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check invalid conversion for numbers outside of the valid range 1...3000, MMMM->undefined", () => {
    const input = "MMMM";
    const expectedResult = undefined;
    //Act
    const result = roman2std(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check I->1 conversion", () => {
    const input = "I";
    const expectedResult = 1;
    //Act
    const result = roman2std(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check V->5 conversion", () => {
    const input = "V";
    const expectedResult = 5;
    //Act
    const result = roman2std(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check X->10 conversion", () => {
    const input = "X";
    const expectedResult = 10;
    //Act
    const result = roman2std(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check L->50 conversion", () => {
    const input = "L";
    const expectedResult = 50;
    //Act
    const result = roman2std(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check C->100 conversion", () => {
    const input = "C";
    const expectedResult = 100;
    //Act
    const result = roman2std(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check D->500 conversion", () => {
    const input = "D";
    const expectedResult = 500;
    //Act
    const result = roman2std(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check M->1000 conversion", () => {
    const input = "M";
    const expectedResult = 1000;
    //Act
    const result = roman2std(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
});
