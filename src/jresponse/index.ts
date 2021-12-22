import { JResponse, JStatus } from "../@types/JResponse"

export const status = JStatus

/**
 * Return OK response
 * @param data 
 * @returns 
 */
export const ok = (data?: unknown): JResponse => {
    return <JResponse>{
        status: JStatus.OK,
        data: data
    }
} 

/**
 * Return Failed response
 * @param error_code 
 * @param msg 
 * @param data 
 * @returns 
 */
export const failed = (error_code: string, msg?: string, data?: unknown): JResponse => {
    return <JResponse>{
        status: JStatus.Failed,
        error_code: error_code,
        msg: msg,
        data: data
    }
}