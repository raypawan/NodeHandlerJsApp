const isUniqueVal = (key, val, arry) => {
  if (Array.isArray(arry) && arry.length > 0) {
    if (arry.some((item) => item[key] == val)) {
      new Error(`${val} is already exist`);
      return false;
    } else if (arry.includes(val)) {
      new Error(`${val} is already exist`);
      return false;
    } else {
      return true;
    }
  }
};

module.exports = isUniqueVal;
