// 占位符
export const placeholder = "--";

/**
 * @name 格式化不存在的文本
 * @param txt {string || object} 传入的文本
 */
export const dataFormat = (txt) => {
  if (typeof txt === undefined || typeof txt === null) {
    return placeholder;
  } else {
    return txt;
  }
};

/**
 * @name 获取年月日
 */
export const getDateTimeString = (time) => {
  let newDate = new Date(time);
  let year = newDate.getFullYear(),
    month = newDate.getMonth() + 1,
    day = newDate.getDay();

  return `${year}年${month}月${day}日`;
};
