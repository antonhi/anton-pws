import { Account, Contact } from "./accounts"
import { Discount } from "./discounts"
import { InitialProduct } from "./products"

/**
 * Initial order placed using Autodesk PWS transactional APIs
 */
export type InitialOrder = {
    endCustomerAccount: Account
    endCustomerContractManager: Contact
    shipTo: Account
    reseller: string
    soldTo: string
    governmentEntity: string
    poNumber: string
    customerPoNumber: string
    contractStartDate: string
    priceDate: string
    items: [InitialProduct]
    discounts: [Discount]
}