const formatToCash = (value) => {
  let result;
  if (typeof value === 'string') {
    result = parseFloat(value);
  }
  result = Math.floor(value * 100);
  result = `${result}`.replace(/([0-9]{2}$)/, '.$1');
  return result;
};

export default formatToCash;
