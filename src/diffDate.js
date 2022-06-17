export default function diffDate(date) {
  const currentDate = new Date().toISOString("YYYY-mm-dd").substring(0, 10);
  var daysDiff = Math.ceil(
    Math.abs(new Date(date) - new Date(currentDate)) / (1000 * 60 * 60 * 24)
  );

  var years = Math.floor(daysDiff / 365.25);
  var remainingDays = Math.floor(daysDiff - years * 365.25);
  var months = Math.floor((remainingDays / 365.25) * 12);
  var days = Math.ceil(daysDiff - (years * 365.25 + (months / 12) * 365.25));

  if (years === 0) {
    return months + `${months > 1 ? " months" : "month"} ago`;
  } else if (years === 0 && months === 0) {
    return days + `${days > 1 ? " days" : "day"} ago`;
  } else {
    return years + ` ${years > 1 ? "years" : "year"} ago`;
  }

  // return {
  //   daysAll: daysDiff,
  //   years: years,
  //   months: months,
  //   days: days
  // };
}
