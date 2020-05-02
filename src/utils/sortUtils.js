import moment from 'moment';

export const sortingOrder = {
  ASC: 'ASC',
  DESC: 'DESC',
};

const getSortFunction = ({ type, field, orderFunction }) => {
  const sortFunction = {
    date: (date1, date2) => orderFunction(moment(date1[field], 'YYYY-MM-DD'), moment(date2[field], 'YYYY-MM-DD')),
    number: (num1, num2) => orderFunction(num1[field], num2[field]),
    text: (txt1, txt2) => orderFunction(txt1[field].toLowerCase(), txt2[field].toLowerCase()),
  };
  return sortFunction[type];
};

export const getSortedItems = ({ items, sortParams: { field, type, order } }) => {
  if (order === sortingOrder.ASC) {
    return items.sort(getSortFunction({ type, field, orderFunction: (a, b) => (a > b ? 1 : -1) }));
  }
  return items.sort(getSortFunction({ type, field, orderFunction: (a, b) => (a < b ? 1 : -1) }));
};
