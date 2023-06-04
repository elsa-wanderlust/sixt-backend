const mongoose = require("mongoose");
// import model
const Booking = require("../models/Booking");
// import function
const { handleDate } = require("./handleDate");

const createConfCode = async (lastName, pickUpDate) => {
  const initials = lastName.slice(0, 3).toUpperCase();
  const yearMonth = handleDate(pickUpDate, "dateMonth");
  const thisMonth = handleDate(pickUpDate, "searchMonth");
  const nextMonth = handleDate(pickUpDate, "nextMonth");
  // calculate number of bookings this month
  const bookingThisMonth = await Booking.find({
    "bookingDate.pickUpDate": {
      $gte: thisMonth,
      $lt: nextMonth,
    },
  });
  // returns the index (number of bookings this month -1) with 3 digits
  let indexBooking = bookingThisMonth.length - 1;
  if (indexBooking < 10) {
    indexBooking = `00${indexBooking}`;
  } else if (indexBooking < 100) {
    indexBooking = `0${indexBooking}`;
  }
  return initials + yearMonth + indexBooking;
};

module.exports = { createConfCode };
