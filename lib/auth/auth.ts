import { enc, HmacSHA256 } from "crypto-js";
import axios, { AxiosRequestConfig } from 'axios';
import { AuthInfo } from "../../models/auth";

export function Auth(consumerKey: string, consumerSecret: string, csn: string) {
    const state = new Map<string, AuthInfo>();

    function getCSN() { return csn; }

    async function getHeader(callbackUrl: string, environmentUrl: string) : Promise<AxiosRequestConfig> {
        if (!state.get(callbackUrl+environmentUrl) || getMinutesElapsed(state.get(callbackUrl+environmentUrl)?.lastRun || 0) >= 15) {
            await refresh(callbackUrl, environmentUrl);
        }
        return {
            headers: {
                'signature': state.get(callbackUrl+environmentUrl)?.signature,
                'timestamp': state.get(callbackUrl+environmentUrl)?.timestamp,
                'Authorization': state.get(callbackUrl+environmentUrl)?.auth,
                'Content-Type': 'application/json',
                'CSN': csn 
            }
        }

    }

    async function refresh(callbackUrl: string, environmentUrl: string) {
        const  timestamp = getTimestamp();
        const signature = getSignature(callbackUrl, timestamp);
        const auth = getAuth();

        const axiosConfig : AxiosRequestConfig = {
                headers: {
                    'signature': signature,
                    'timestamp': timestamp,
                    'Authorization': auth
                }
        };

        try {
            await axios.post('https://'+ environmentUrl +'/v2/oauth/generateaccesstoken?grant_type=client_credentials', null, axiosConfig);
            state.set(callbackUrl+environmentUrl, {
                lastRun: Date.now(),
                timestamp: timestamp,
                signature: signature,
                auth: auth
            })
        } catch (e) {
            console.log(e);
            return '';
        }
    }

    function getMinutesElapsed(time: number) {
        return (Date.now()-time)/1000/60;
    }

    function getTimestamp() {
        return Date.now()/1000 | 0;
    }

    function getSignature(callbackUrl: string, timestamp: number) {
        const message = callbackUrl + consumerKey + timestamp;
        const hash = HmacSHA256(message, consumerSecret);
        return enc.Base64.stringify(hash);
    }

    function getAuth() {
        const passwordSignature = consumerKey + ":" + consumerSecret;
        return 'Basic ' + Buffer.from(passwordSignature).toString('base64');
    }
    return {
        getCSN,
        getHeader
    }
}