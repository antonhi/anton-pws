import { AuthService } from "../../../models/auth";
import axios from 'axios';
import { OrderStatusResponse } from "../../../models/orders";

export function Status(auth: AuthService) {
    async function get(transactionId: string, callbackUrl: string, environmentUrl: string) : Promise<OrderStatusResponse> {
        try {
            const authentication = await auth.getHeader(callbackUrl, environmentUrl);
            const response = await axios.get('https://'+ environmentUrl +`/v1/orders/status/${transactionId}`, authentication);
            return {
                status: response.data.status,
                message: response.data.message,
                last_updated: response.data.last_updated
            };
        } catch (_) {
            return {
                status: 'error',
                message: '',
                last_updated: ''
            }
        }
    }
    return {
        get
    };
}