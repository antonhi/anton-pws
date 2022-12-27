enum DiscountType {
    DDA
}

export type Discount = {
    /**
     * Discount ID for approved Deal Discounts (Opportunity number associated with the Deal Discount Number) (Mandatory)
     */
    discountId: string
    /**
     * Type of discount being applied. Valid values: DDA (Mandatory)
     */
    discountType: DiscountType
}