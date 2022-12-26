export type Account = {
    csn: string,
    name: string,
    altName: string,
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    city: string,
    postalCode: string,
    stateProvinceCode: string,
    countryCode: string,
    phoneNumber: string
}

export type Contact = {
    firstName: string,
    lastName: string,
    email: string,
    countryCode: string,
    language: string
}