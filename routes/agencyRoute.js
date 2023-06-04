const express = require("express");
const router = express.Router();
router.use(express.json());
const axios = require("axios");

// ROUTE 1 - GET LIST OF LOCATIONS / AGENCIES
router.get("/agency/list", async (req, res) => {
  // -------- DEV ONLY : start --------
  // add security filter = needs to be 3 letters minimum
  const tempfilter = "q=san%20fran";
  // -------- DEV ONLY : end --------

  try {
    const agencyList = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/locations?${tempfilter}`,
      {
        headers: {
          authorization: `Bearer ${process.env.SIXT_API_KEY}`,
        },
      }
    );
    res.status(200).json(agencyList.data);
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500) // ELSA TBD
      .json({ message: error.message || "Internal Server Error" }); // ELSA TBD
  }
});

// ROUTE 2 - GET OFFERS FOR SPECIFIC AGENCIES
router.get("/agency/offer", async (req, res) => {
  // -------- DEV ONLY : start --------
  // add security filter = all fields must be filled // pick up date > now // drop off date > pick up date //
  // pickup and drop off station can be different?
  const tempPickUpStation2 = "L_ChIJIQBpAG2ahYAR_6128GcTUEo";
  const tempDropOffStation2 = "L_ChIJIQBpAG2ahYAR_6128GcTUEo";
  const tempPickUpDate = "2023-06-28T12:30:00";
  const tempDropOffDate = "2023-06-30T08:30:00";
  // -------- DEV ONLY : end --------
  try {
    const agencyOffer = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/rentaloffers?pickupStation=${tempPickUpStation2}&returnStation=${tempPickUpStation2}&pickupDate=${tempPickUpDate}&returnDate=${tempDropOffDate}`,
      {
        headers: {
          authorization: `Bearer ${process.env.SIXT_API_KEY}`,
        },
      }
    );
    res.status(200).json(agencyOffer.data);
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500) // ELSA TBD
      .json({ message: error.message || "Internal Server Error" }); // ELSA TBD
  }
});

// ROUTE 3 - GET DETAILS ON ONE SPECIFIC OFFER
router.post("/agency/offerDetails", async (req, res) => {
  // -------- DEV ONLY : start --------
  // add security filter : need offer ID is required
  const tempOfferId = "a0e22c51-2c4a-42a9-a2a7-938975c53b17-LTAR";
  // -------- DEV ONLY : end --------

  try {
    const agencyOffer = await axios.post(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/rentalconfigurations/create`,
      { offerId: tempOfferId },
      {
        headers: {
          authorization: `Bearer ${process.env.SIXT_API_KEY}`,
        },
      }
    );
    res.status(200).json(agencyOffer.data);
  } catch (error) {
    console.error(error.response);
    res
      .status(error.status || 500) // ELSA TBD
      .json({ message: error.message || "Internal Server Error" }); // ELSA TBD
  }
});

module.exports = router;
