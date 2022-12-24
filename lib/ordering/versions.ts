import { Orders } from "./v1/v1";

export function OrderVersionManager(consumerKey : string, consumerSecret: string, csn: string) {
    const v1 = Orders(consumerKey, consumerSecret, csn);
    return {
        v1
    };
}