const mongoose = require("mongoose");

const Booking = mongoose.model("Bookings", {
  dateOfBooking: {
    type: Date,
    default: Date.now,
  },
  confirmationCode: String,
  client: {
    firstName: String,
    lastName: String,
  },
  agency: String,
  vehicule: {
    name: String,
    picture: String,
  },
  bookingDate: {
    pickUpDate: Date,
    dropOffDate: Date,
  },
  cost: {
    dayPrice: { amount: Number, currency: String },
    extraFees: [
      {
        title: String,
        price: {
          amount: Number,
          unit: String,
          taxInfo: String,
        },
      },
    ],
    additionalCharges: [
      {
        title: String,
        price: {
          amount: Number,
          unit: String,
          taxInfo: String,
        },
      },
    ],
  },
});

module.exports = Booking;
