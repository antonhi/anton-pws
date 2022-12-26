import { AxiosRequestConfig } from "axios"

export type AuthInfo = {
    timestamp: number
    signature: string
    auth : string
}

export type AuthService = {
    getCSN: () => string
    getHeader: (callbackUrl: string, environmentUrl: string) => Promise<AxiosRequestConfig<any>>;
}