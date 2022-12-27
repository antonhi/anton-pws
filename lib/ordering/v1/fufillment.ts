import axios from 'axios';
import { AuthService } from '../../../models/auth';
import { InitialOrder, InitialOrderResponse } from "../../../models/orders";
import { InitialProduct } from '../../../models/products';

export function Fulfillment(auth: AuthService) {

    async function placeInitialOrder(order: InitialOrder, callbackUrl: string, environmentUrl: string) : Promise<InitialOrderResponse> {
        try {
            const authentication = await auth.getHeader(callbackUrl, environmentUrl);
            const response = await axios.post('https://'+ environmentUrl +'/v2/orders/fulfillment', await getInitialOrderBody(order, callbackUrl, environmentUrl), authentication);
            return response.data.error ? {
                transactionId: response.data.transactionId,
                status: response.data.status,
                error: response.data.error
            } : {
                transactionId: response.data.transactionId,
                status: response.data.status
            }
        } catch (_) {
            return {
                transactionId: '',
                status: 'error'
            };
        }
    }

    async function getInitialOrderBody(order: InitialOrder, callbackUrl: string, environmentUrl: string) {
        return {
            action: 'Initial',
            endCustomer: {
                account: order.endCustomerAccount,
                contractManager: order.endCustomerContractManager,
            },
            shipTo: order.shipTo,
            reseller: {
                csn: order.reseller
            },
            soldTo: {
                csn: order.soldTo
            },
            governmentEntity: !order.governmentEntity ? null : {
                csn: order.governmentEntity
            },
            poNumber: order.poNumber,
            customerPoNumber: order.customerPoNumber,
            contractStartDate: order.contractStartDate,
            priceDate: order.priceDate,
            lineItems: await getLineItems(order.items, order.contractStartDate || getCurrentDate(), callbackUrl, environmentUrl),
            orderDiscounts: order.discounts
        }
    }

    async function getLineItems(items : Array<InitialProduct>, startDate: string, callbackUrl: string, environmentUrl: string) {
        console.log('Getting line items');
        const lineItems = [];
        for (let item of items) {
            lineItems.push({
                partNumber: item.partNumber,
                partnerSubscriptionId: item.partnerSubscriptionId,
                quantity: item.quantity,
                netPrice: await getPrice(item.partNumber, item.quantity, startDate, callbackUrl, environmentUrl)
            });
        }
        console.log('Line Items: ' + lineItems.toString());
        return lineItems;
    }

    async function getPrice(partNumber: string, quantity: number, startDate: string, callbackUrl: string, environmentUrl: string) {
        try {
            const authentication = await auth.getHeader(callbackUrl, environmentUrl);
            const response = await axios.get('https://'+ environmentUrl +`/v1/sku/prices?customer_number=${auth.getCSN()}&part_number=${partNumber}&price_date=${startDate}&quantity=${quantity}`, authentication);
            return response.data.response.net_price+'';
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    function getCurrentDate() {
        const date = new Date();
        let day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
        let month = date.getMonth() + 1 < 10 ? '0'+(date.getMonth() + 1) : date.getMonth() + 1;
        let year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    return {
        placeInitialOrder,
        getCurrentDate,
        getPrice
    };
}