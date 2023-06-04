// receive a date under the format 2023-06-28T10:30:00.000+00:00, returns year 2023 and month 06
// and a type: dateMonth or searchMonth or nextMonth
const handleDate = (date, type) => {
  // returns year 2023 and month 06
  const year = new Date(date).toLocaleDateString("en-uk", {
    year: "numeric",
  });
  const month = new Date(date).toLocaleDateString("en-uk", {
    month: "2-digit",
  });
  // calculate next month, with 2 digits, eg: 07
  let nextMonth = "";
  if (month < 10) {
    nextMonth = `0${parseInt(month) + 1}`;
  } else {
    nextMonth = parseInt(month) + 1;
  }

  if (type === "dateMonth") {
    return `${year.slice(2)}${month}`; // returns 2023-06
  } else if (type === "searchMonth") {
    return `${year}-${month}-01`; // returns 2023-06-01
  } else {
    return `${year}-${nextMonth}-01`; // returns 2023-07-01
  }
};

module.exports = { handleDate };
