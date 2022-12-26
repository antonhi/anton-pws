import { AuthService } from "../../../models/auth";
import { Fulfillment } from "./fufillment";

export function Orders (auth: AuthService) {
    const fulfillment = Fulfillment(auth);
    return {
        fulfillment
    };
}