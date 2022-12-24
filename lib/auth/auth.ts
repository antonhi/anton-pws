import { enc, HmacSHA256 } from "crypto-js";
import axios, { AxiosRequestConfig } from 'axios';

export function Auth(consumerKey: string, consumerSecret: string) {
    let lastRun = -1;
    let accessToken: string

    async function getAccessToken(callbackUrl: string, environmentUrl: string) {
        if (lastRun < 0 || getMinutesElapsed() >= 15) {
            const timestamp = getTimestamp();
            const signature = getSignature(callbackUrl, timestamp);
            const auth = getAuth();

            const axiosConfig : AxiosRequestConfig = {
                headers: {
                    'signature': signature,
                    'timestamp': timestamp,
                    'Authorization': auth
                }
            };

            axios.post('https://'+ environmentUrl +'/v2/oauth/generateaccesstoken?grant_type=client_credentials', 
            null, axiosConfig)
            .then((res) => {
                accessToken = res.data.access_token;
                lastRun = Date.now();
                return accessToken;
            })
            .catch((error) => {
                console.log(error);
                return '';
            });
        } else {
            return accessToken;
        }
    }

    function getMinutesElapsed() {
        return (Date.now()-lastRun)/1000/60;
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
        getAccessToken
    };
}