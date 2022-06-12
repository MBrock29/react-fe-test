export const getDate = (timestamp: number) => {
  const currentDate = new Date(timestamp * 1000).toLocaleDateString();
  return currentDate;
};
