import axios, { AxiosResponse, Method } from 'axios';
import { HttpErrorCode } from '../@types/Http';
import { JResponse, JStatus } from '../@types/JResponse';


/**
 * Run http request.
 * @param method
 * @param body
 * @param url
 * @returns
 */
export function http(url: string, method: string, body?: any): Promise<JResponse> {
    return axios
        .request({
            method: method as Method,
            data: body,
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((result: AxiosResponse) => {
            return <JResponse>result.data
        })
        .catch((error: Error) => {
            return <JResponse>{
                status: JStatus.Failed,
                error_code: HttpErrorCode.unknown_error,
                msg: error.toString()
            };
        });
};


export const httpGet = (url: string): Promise<JResponse> => {
    return http(url, 'GET')
}


export const httpPost = (url: string, body?: any): Promise<JResponse> => {
    return http(url, 'POST', body)
}

export const httpPut = (url: string, body?: any): Promise<JResponse> => {
    return http(url, 'PUT', body)
}

export const httpDelete = (url: string, body?: any): Promise<JResponse> => {
    return http(url, 'DELETE', body)
}