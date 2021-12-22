export enum JStatus {
    OK = 'OK',
    Failed = 'Failed',
}

export declare type JResponse = {
    status: JStatus
    error_code?: string
    msg?: string
    data?: unknown
    [more: string | number]: unknown
}

export {}