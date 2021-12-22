import { EmptyValue } from "../@types/EmptyValue";

/**
 * Check the value is empty.
 * @note Support string, number, object, null, undefined
 */
export function isEmpty<T>(value: T | EmptyValue): value is EmptyValue {
    return (
        value === null ||
        typeof value == 'undefined' ||
        (typeof value == 'string' && !value.trim()) ||
        (typeof value == 'object' && Object.keys(value).length < 1) ||
        !value
    );
};

/**
 * Check the value is not empty.
 * @note Support string, number, object, null, undefined
 */
export function isNotEmpty<T>(value: T | EmptyValue): value is T {
    return !isEmpty(value);
};

/**
 * Check multiple value is empty.
 * @note Support string, number, object, null, undefined
 */
export const isAllEmpty = (...values: any[]): boolean => {
    return values.every((value) => isEmpty(value));
};

/**
 * Check multiple value is not empty.
 * @note Support string, number, object, null, undefined
 */
export const isAllNotEmpty = (...values: any[]): boolean => {
    return values.every((value) => !isEmpty(value));
};

/**
 * Check value is undefined or not.
 *
 */
export const isUndefined = (value?: any): value is undefined => {
    return value === undefined;
};

export function isDefined<T>(value: T | undefined): value is T {
    return !isUndefined(value)
}