# anton-pws
Example NodeJS SDK for Autodesk PWS.

## Installation
Navigate to your NodeJS application in a terminal and run `npm i anton-pws@1.0.0`

## Initializing the Client
1. Obtain your credentials from the [Partner Developer Portal](https://partner.developer.autodesk.com). This includes your:
    - consumerSecret (obtained within an app you create in the Portal)
    - consumerKey (obtained within an app you create in the Portal)
    - csn (obtained from the Portal when logged in)
2. You must initialize a PWS client to use all SDK functionality. This can be done by calling the `PWS` function and passing in your credentials.

```js
const client = PWS(consumerKey, consumerSecret, csn);
```

## Placing an Initial Order
You can use the `fulfillment` module to place an initial order:

```js
const order = await client.orders.v1.fulfillment.placeInitialOrder(InitialOrder, callbackUrl, environmentUrl);
```

## Getting an Order Status
You can use the `status` module to retrieve an order status:

```js
const status = await client.orders.v1.status.get(transactionId, callbackUrl, environmentUrl);
```

## Models

An `InitialOrder` has the following JSON structure ('?' denotes optional property):

```json
{
    "endCustomerAccount": Account,
    "endCustomerContractManager": Contact,
    "shipTo": Account,
    "reseller": string,
    "soldTo": string,
    "governmentEntity": string?,
    "poNumber": string,
    "customerPoNumber": string?,
    "contractStartDate": string?,
    "priceDate": string?,
    "items": Array<InitialProduct>,
    "discounts": Array<Discount>?
}
```

An `Account` has the following JSON structure ('?' denotes optional property):

```json
{
    "csn": string?,
    "name": string?,
    "altName": string?,
    "addressLine1": string?,
    "addressLine2": string?,
    "addressLine3": string?,
    "city": string?,
    "postalCode": string?,
    "stateProvinceCode": string?,
    "countryCode": string?,
    "phoneNumber": string?
}
```

A `Contact` has the following JSON structure ('?' denotes optional property):

```json
{
    "firstName": string,
    "lastName": string,
    "email": string,
    "countryCode": string?,
    "language": string?
}
```

An `InitialProduct` has the following JSON structure ('?' denotes optional property):

```json
{
    "partNumber": string,
    "partnerSubscriptionId": string?,
    "quantity": number
}
```

A `Discount` has the following JSON structure ('?' denotes optional property):

```json
{
    "discountId": string,
    "discountType": DiscountType
}
```