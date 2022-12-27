export type Account = {
    /**
     * Account csn
     */
    csn: string | null,
    /**
     * Name for account (Mandatory if csn is not provided, ignored otherwise)
     */
    name: string | null,
    /**
     * Alternate name for account (Optional if csn is not provided, ignored otherwise)
     */
    altName: string | null,
    /**
     * Address for account (Mandatory if csn is not provided, ignored otherwise)
     */
    addressLine1: string | null,
    /**
     * Address Line 2 for account (Optional if csn is not provided, ignored otherwise)
     */
    addressLine2?: string | null,
    /**
     * Address Line 3 for account (Optional if csn is not provided, ignored otherwise)
     */
    addressLine3: string | null,
    /**
     * City of address for account (Mandatory if csn is not provided, ignored otherwise)
     */
    city: string | null,
    /**
     * Postal code of address for account (Mandatory if csn is not provided, ignored otherwise)
     */
    postalCode: string | null,
    /**
     * State or province code of address for account (Mandatory if csn is not provided, ignored otherwise)
     */
    stateProvinceCode: string | null,
    /**
     * Country code of address for account (Optional if csn is not provided, ignored otherwise)
     */
    countryCode: string | null,
    /**
     * Phone number of account (Optional if csn is not provided, ignored otherwise)
     */
    phoneNumber: string | null
}

export type Contact = {
    /**
     * First name of the contact (Mandatory)
     */
    firstName: string,
    /**
     * Last name of the contact (Mandatory)
     */
    lastName: string,
    /**
     * Email address of the contact (Mandatory)
     */
    email: string,
    /**
     * Country of the contact (Optional)
     */
    countryCode: string | null,
    /**
     * Language of the contact (Optional)
     */
    language: string | null
}