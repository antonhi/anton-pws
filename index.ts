import { InitialOrder, InitialOrderResponse } from "./models/orders";
import { Account, Contact } from "./models/accounts";
import { InitialProduct } from "./models/products";
import { Discount } from "./models/discounts";
import { OrderVersionManager } from "./lib/ordering/versions";
import { Auth } from "./lib/auth/auth";

function PWS(consumerKey : string, consumerSecret : string, csn : string) {

    const auth = Auth(consumerKey, consumerSecret, csn);
    const orders = OrderVersionManager(auth);

    return {
        orders
    };
}

export {
    InitialOrder,
    InitialOrderResponse,
    Account,
    Contact,
    InitialProduct,
    Discount,
    PWS
}