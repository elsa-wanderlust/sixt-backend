## SET UP 👨‍💻

```bash
npm install
```

or

```bash
npm i
```

to install all the packages

The frontend repo is also [available](https://github.com/elsa-wanderlust/sixt-front)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
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
