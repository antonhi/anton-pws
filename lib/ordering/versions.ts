import { AuthService } from "../../models/auth";
import { Orders } from "./v1/v1";

export function OrderVersionManager(auth: AuthService) {
    const v1 = Orders(auth);
    return {
        v1
    };
}