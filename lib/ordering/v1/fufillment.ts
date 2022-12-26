import { InitialOrder } from "../../../models/orders";

export function Fulfillment(consumerKey : string, consumerSecret: string, csn: string) {

    function placeInitialOrder(order: InitialOrder) {
        
    }

    function printCSN() {
        console.log(csn);
    }

    return {
        printCSN
    };
}