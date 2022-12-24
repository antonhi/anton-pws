import { InitialOrder } from "./models/orders";
import { Account, Contact } from "./models/accounts";
import { InitialProduct } from "./models/products";
import { Discount } from "./models/discounts";
import { OrderVersionManager } from "./lib/ordering/versions";
import { Auth } from "./lib/auth/auth";

function PWS(consumerKey : string, consumerSecret : string, csn : string) {

    const auth = Auth(consumerKey, consumerSecret);
    const orders = OrderVersionManager(consumerKey, consumerSecret, csn);

    return {
        auth,
        orders
    };
}

export {
    InitialOrder,
    Account,
    Contact,
    InitialProduct,
    Discount,
    PWS
}