export const round = (num, presicion = 2) =>
  parseFloat(parseFloat(num).toFixed(presicion));
