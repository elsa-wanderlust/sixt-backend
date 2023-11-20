## LOCAL SET UP 👨‍💻

`npm install ` or `npm i` to add the pkgs

The frontend repo is also [available](https://github.com/elsa-wanderlust/sixt-front)

Database: MongoDB

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## ONLINE 🌏

server hosted on Northflank

deployed via Netlify [here](https://elsa-letallieur-sixt.netlify.app/)

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## AGENCIES ROUTES

### /agency/list (GET)

Get a list of agency/location

| Query | Type   | Required            |
| ----- | ------ | ------------------- |
| `q`   | string | Yes (3 letters min) |

<br>
<br>

### /agency/offer (GET)

Get the list of vehicules available in one location

| Query            | Type   | Required |
| ---------------- | ------ | -------- |
| `pickupStation`  | string | Yes      |
| `dropoffStation` | string | Yes      |
| `pickupDate`     | date   | Yes      |
| `dropoffDate`    | date   | Yes      |

<br>
<br>

### /agency/offerDetails (POST)

Receive details of an offer

| Body      | Type   | Required |
| --------- | ------ | -------- |
| `offerId` | string | Yes      |

<br>
<br>

## BOOKING ROUTES

### /booking/create (POST)

Get a list of agency/location

| Body                | Type   | Required |
| ------------------- | ------ | -------- |
| `firstName`         | string | yes      |
| `lastName`          | string | yes      |
| `pickUpAgency`      | string | yes      |
| `dropOffAgency`     | string | yes      |
| `vehiculeName`      | string | yes      |
| `vehiculePicture`   | string | yes      |
| `pickUpDate`        | date   | yes      |
| `dropOffDate`       | date   | yes      |
| `dayPrice`          | number | yes      |
| `currency`          | string | yes      |
| `extraFees`         | array  | no       |
| `additionalCharges` | array  | no       |

<br>
<br>

### /booking/all (GET)

Get a list of all the bookings

<br>
<br>

### /booking/delete/:id (DELETE)

Detele a booking

| Params | Type   | Required |
| ------ | ------ | -------- |
| `id`   | string | yes      |

<br>
<br>

Reach out [here](https://github.com/elsa-wanderlust/sixt-backend/issues) if any question!
