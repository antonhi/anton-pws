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
    governmentEntity: string | null
    poNumber: string
    customerPoNumber: string | null
    contractStartDate: string | null
    priceDate: string | null
    items: Array<InitialProduct>
    discounts: Array<Discount>
}