export const roundToDecimalPlace = (number, decimalPrecision) => {
  return (Math.round(number * 100) / 100).toFixed(decimalPrecision);
};
