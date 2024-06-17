export const timstamp = () => {
  const millis = Date.now();
  return Math.floor(millis / 1000);
};
