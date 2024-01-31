export const sliceText = (text: string, length: number) => {
  let result = text;
  if (result.length > length) {
    result = result.slice(0, length);
    result = result.slice(0, result.lastIndexOf(' ')) + '...';
  }
  return result;
};
