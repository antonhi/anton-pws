export type Account = {
    csn: string | null,
    name: string | null,
    altName: string | null,
    addressLine1: string | null,
    addressLine2: string | null,
    addressLine3: string | null,
    city: string | null,
    postalCode: string | null,
    stateProvinceCode: string | null,
    countryCode: string | null,
    phoneNumber: string | null
}

export type Contact = {
    firstName: string,
    lastName: string,
    email: string,
    countryCode: string | null,
    language: string | null
}