import { AuthService } from "../../../models/auth";
import { Fulfillment } from "./fufillment";
import { Status } from "./status";

export function Orders (auth: AuthService) {
    const fulfillment = Fulfillment(auth);
    const status = Status(auth);
    return {
        fulfillment,
        status
    };
}