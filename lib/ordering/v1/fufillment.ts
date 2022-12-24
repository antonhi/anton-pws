export function Fulfillment(consumerKey : string, consumerSecret: string, csn: string) {

    function printCSN() {
        console.log(csn);
    }

    return {
        printCSN
    };
}