export const isValidHex = (hex: string): boolean => {
  const re = /[0-9A-Fa-f]{6}/g;

  if (re.test(hex)) {
    return true;
  } else {
    return false;
  }
};
