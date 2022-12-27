export type Account = {
    /**
     * Account csn
     */
    csn?: string,
    /**
     * Name for account (Mandatory if csn is not provided, ignored otherwise)
     */
    name?: string,
    /**
     * Alternate name for account (Optional if csn is not provided, ignored otherwise)
     */
    altName?: string,
    /**
     * Address for account (Mandatory if csn is not provided, ignored otherwise)
     */
    addressLine1?: string,
    /**
     * Address Line 2 for account (Optional if csn is not provided, ignored otherwise)
     */
    addressLine2?: string,
    /**
     * Address Line 3 for account (Optional if csn is not provided, ignored otherwise)
     */
    addressLine3?: string,
    /**
     * City of address for account (Mandatory if csn is not provided, ignored otherwise)
     */
    city?: string,
    /**
     * Postal code of address for account (Mandatory if csn is not provided, ignored otherwise)
     */
    postalCode?: string,
    /**
     * State or province code of address for account (Mandatory if csn is not provided, ignored otherwise)
     */
    stateProvinceCode?: string,
    /**
     * Country code of address for account (Optional if csn is not provided, ignored otherwise)
     */
    countryCode?: string,
    /**
     * Phone number of account (Optional if csn is not provided, ignored otherwise)
     */
    phoneNumber?: string
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
    countryCode?: string,
    /**
     * Language of the contact (Optional)
     */
    language?: string
}