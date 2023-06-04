## AGENCY

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

## BOOKING

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
