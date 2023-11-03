//Arrange
const romanToStd = require("../src/roman_to_std_nums");

describe("test converting from roman to standard numerals", () => {
  it("check invalid conversion for A->undefined", () => {
    const input = "A";
    const expectedResult = undefined;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check invalid conversion for numbers outside of the valid range 1...3000, MMMM->undefined", () => {
    const input = "MMMM";
    const expectedResult = undefined;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check I->1 conversion", () => {
    const input = "I";
    const expectedResult = 1;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check V->5 conversion", () => {
    const input = "V";
    const expectedResult = 5;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check X->10 conversion", () => {
    const input = "X";
    const expectedResult = 10;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check L->50 conversion", () => {
    const input = "L";
    const expectedResult = 50;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check C->100 conversion", () => {
    const input = "C";
    const expectedResult = 100;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check D->500 conversion", () => {
    const input = "D";
    const expectedResult = 500;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  //Arrange
  it("check M->1000 conversion", () => {
    const input = "M";
    const expectedResult = 1000;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });

  //Arrange
  it("check MMDCCXCIV->2794 conversion", () => {
    const input = "MMDCCXCIV";
    const expectedResult = 2794;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });

  //Arrange
  it("check MCCCXXVII->1327 conversion", () => {
    const input = "MCCCXXVII";
    const expectedResult = 1327;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });

  //Arrange
  it("check MMDLXVI->2566 conversion", () => {
    const input = "MMDLXVI";
    const expectedResult = 2566;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });

  //Arrange
  it("check MMM->3000 conversion", () => {
    const input = "MMM";
    const expectedResult = 3000;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });

  //Arrange
  it("check MMDCCCXXIII->2823 conversion", () => {
    const input = "MMDCCCXXIII";
    const expectedResult = 2823;
    //Act
    const result = romanToStd(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
    
});
