import { Account, Contact } from "./accounts"
import { Discount } from "./discounts"
import { InitialProduct } from "./products"

/**
 * Initial order placed using Autodesk PWS transactional APIs
 */
export type InitialOrder = {
    /**
     * Default End Customer Account information for the order placed (Mandatory)
     */
    endCustomerAccount: Account
    /**
     * Default Contract Manager for the order placed (Mandatory)
     */
    endCustomerContractManager: Contact
    /**
     * Default Ship To Account for the order placed (Mandatory)
     */
    shipTo: Account
    /**
     * Default Reseller Account CSN for the order placed (Mandatory)
     */
    reseller: string
    /**
     * Default Sold To Account CSN for the order placed. The value should always be equal to the renewable CSN of the partner calling the API (Mandatory)
     */
    soldTo: string
    /**
     * End customer's associated government entity so that the proper split is assigned for revenue allocation (Optional)
     */
    governmentEntity?: string
    /**
     * Partner Purchase Order number (Mandatory)
     */
    poNumber: string
    /**
     * Customer Purchase Order number (Optional)
     */
    customerPoNumber?: string
    /**
     * Requested contract start date. This value can only be in the future and not longer than 31 days including the order date. (Optional)
     */
    contractStartDate?: string
    /**
     * Explicit price date to support the 5 days grace period functionality (Optional)
     */
    priceDate?: string
    /**
     * List of products to be ordered (Mandatory)
     */
    items: Array<InitialProduct>
    /**
     * List of Discounts to be applied (Optional)
     */
    discounts?: Array<Discount>
}

/**
 * Initial order response
 */
export type InitialOrderResponse = {
    /**
     * The unique integer used in the request to identify the transaction (Mandatory)
     */
    transactionId: string,
    /**
     * The status confirming if request event has started processing or encountered an error. Possible values are: processing, error (Mandatory)
     */
    status: string,
    /**
     * Error when processing the event, if any (Optional)
     */
    error?: {
        /**
         * Error code associated with the error message. Please check Error Messages for error codes and descriptions (Optional)
         */
        code?: string,
        /**
         * Human readable message explaining the error. Please check Error Messages for error codes and descriptions (Optional)
         */
        message?: string
    }
}

export type OrderStatusResponse = {
    /**
     * The status to indicate if the order is processed successfully (Mandatory)
     */
    status: string,
    /**
     * A detailed description of the status (Mandatory)
     */
    message: string,
    /**
     * The last change of status for the order (Mandatory)
     */
    last_updated: string
}