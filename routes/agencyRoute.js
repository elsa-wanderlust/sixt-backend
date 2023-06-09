const express = require("express");
const router = express.Router();
router.use(express.json());
const axios = require("axios");

// ROUTE 1 - GET LIST OF LOCATIONS / AGENCIES
router.get("/agency/list", async (req, res) => {
  try {
    if (req.query.length < 3) {
      return res
        .status(400)
        .json({ message: "need to enter at least 3 characters" });
    }
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
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
});

// ROUTE 2 - GET OFFERS FOR SPECIFIC AGENCIES
router.get("/agency/offer", async (req, res) => {
  try {
    const { pickupStation, pickupDate, returnDate } = req.query;
    if (!pickupStation || !pickupDate || !returnDate) {
      return res.status(400).json({ message: "missing parameter(s)" });
    }
    const agencyOffer = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/rentaloffers?pickupStation=${pickupStation}&returnStation=${pickupStation}&pickupDate=${pickupDate}&returnDate=${returnDate}`,
      {
        headers: {
          authorization: `Bearer ${process.env.SIXT_API_KEY}`,
        },
      }
    );
    res.status(200).json(agencyOffer.data);
  } catch (error) {
    if (error.response.data.message === "bad request") {
      res.status(500).json({
        message:
          "Désolé, les agences de tout le pays sont momentanément fermées, pour cause d'attaque de zombies.",
      });
    } else {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }
});

// ROUTE 3 - GET DETAILS ON ONE SPECIFIC OFFER
router.post("/agency/offerDetails", async (req, res) => {
  try {
    if (!req.body.id) {
      return res.status(400).json({ message: "missing parameter(s)" });
    }
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
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
});

module.exports = router;
