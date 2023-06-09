const express = require("express");
const router = express.Router();
router.use(express.json());
const axios = require("axios");

// ROUTE 1 - GET LIST OF LOCATIONS / AGENCIES
router.get("/agency/list", async (req, res) => {
  // receive the query and split between each spaces entered
  const queryTab = req.query.q.split(" ");
  let query = "q=";
  for (let i = 0; i < queryTab.length; i++) {
    if (i === 0) {
      query = query + queryTab[i] + "%20";
    } else if (i === queryTab.length - 1) {
      query = query + queryTab[i];
    } else {
      query = query + queryTab[i] + "%20";
    }
  }
  // -------- DEV ONLY : start --------
  // add security filter = needs to be 3 letters minimum
  // -------- DEV ONLY : end --------

  try {
    const agencyList = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/locations?${query}`,
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
  // -------- DEV ONLY : end --------
  try {
    const agencyOffer = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/rentaloffers?pickupStation=${req.query.pickupStation}&returnStation=${req.query.pickupStation}&pickupDate=${req.query.pickupDate}&returnDate=${req.query.returnDate}`,
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
      { offerId: req.body.id },
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
