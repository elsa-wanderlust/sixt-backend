const express = require("express");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");

// import model
const Booking = require("../models/Booking");
// import function
const { createConfCode } = require("../utils/createConfirmationCode");

// ROUTE 1 - CREATE A NEW BOOKING
router.post("/booking/create", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      agency,
      vehiculeName,
      vehiculePicture,
      pickUpDate,
      dropOffDate,
      dayPrice,
      currency,
      extraFees,
      additionalCharges,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !agency ||
      !vehiculeName ||
      !vehiculePicture ||
      !pickUpDate ||
      !dropOffDate ||
      !dayPrice ||
      !currency
    ) {
      return res.status(400).json({ message: "missing parameter(s)" });
    }
    const newBooking = new Booking({
      client: {
        firstName: firstName,
        lastName: lastName,
      },
      agency,
      vehicule: {
        name: vehiculeName,
        picture: vehiculePicture,
      },
      bookingDate: {
        pickUpDate,
        dropOffDate,
      },
      cost: {
        dayPrice: {
          amount: dayPrice,
          currency: currency,
        },
        extraFees,
        additionalCharges,
      },
    });
    await newBooking.save();

    // add confirmation code
    const confirmationCode = await createConfCode(lastName, pickUpDate);
    const update = await Booking.findByIdAndUpdate(newBooking._id, {
      confirmationCode: confirmationCode,
    });
    res.status(200).json(confirmationCode);
  } catch (error) {
    console.error(error.message);
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
});

// ROUTE 2 - GET ALL BOOKING
router.get("/booking/all", async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.status(200).json(allBookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ROUTE 3 - CANCEL A BOOKING
router.delete("/booking/delete/:id", async (req, res) => {
  try {
    const bookingDeleted = await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json(bookingDeleted);
  } catch (error) {
    if (error.message.slice(0, 23) === "Cast to ObjectId failed") {
      res.status(400).json({ message: "no booking matching ID provided" });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
