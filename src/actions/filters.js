// action genertaor textFilter
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// action generator sort by amount
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// action generator sort by date
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// action generator set start date
export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date,
});

// action generator set end date
export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date,
});
