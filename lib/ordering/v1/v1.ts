import { Fulfillment } from "./fufillment";

export function Orders (consumerKey: string, consumerSecret: string, csn: string) {
    const fulfillment = Fulfillment(consumerKey, consumerSecret, csn);
    return {
        fulfillment
    };
}