// 占位符
const placeholder = "--";

/**
 * @name 格式化不存在的文本
 * @param txt {string || object} 传入的文本
 */
const dataFormat = (txt) => {
  if (typeof txt === undefined || typeof txt === null) {
    return placeholder;
  } else {
    return txt;
  }
};

/**
 * @name 获取年月日
 */
const getDateTimeString = (time) => {
  let newDate = new Date(time);
  let year = newDate.getFullYear(),
    month = newDate.getMonth() + 1,
    day = newDate.getDay();

  return `${year}年${month}月${day}日`;
};

/**
 * @name 数字过万时进行去小数点向下取整替换成 万
 */

const formatNumber = (param) => {
  if ((param && param === 0) || param === "0") {
    return 0;
  }

  if (typeof param === "number") {
    if (param > 10000) {
      return Math.floor(param / 10000) + "万";
    } else {
      return param;
    }
  }

  if (typeof param === "string") {
    let newParam = Number(param);
    if (newParam && typeof newParam === "number") {
      if (param > 10000) {
        return Math.floor(param / 10000) + "万";
      } else {
        return param;
      }
    }
  }
};

export { placeholder, dataFormat, getDateTimeString, formatNumber };
