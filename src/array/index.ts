import { each as _each, filter as _filter } from 'lodash';
import { JObject } from '../@types/JObject';

/**
 * Loop an array / object and retrieve its value and key.
 * @see https://lodash.com/docs/4.17.15#forEach
 */
// For array
export function each<T>(data: ArrayLike<T>, callback?: (value: T, index: number) => void | boolean): ArrayLike<T>;
// For object
export function each<T extends object>(data: T, callback?: (value: T[keyof T], key: string) => void | boolean): T;
// For others
export function each(data: any, callback?: (value: any, key: any) => void | boolean): any;
export function each(data: any, callback?: (value: any, key: any) => void | boolean) {
    return _each(data, callback);
}

/**
 * Perform filter of an array / object by given a predicate (filter function).
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
export const filter = _filter

/**
 * Sort an array / object by given a compareFn and return array.
 *
 * @param data The object passed in this function will convert to array and process sorting.
 * @return Only return sorted array without key-value paired.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
export const sort = (data: any[] | JObject, compareFn: (a: any, b: any) => number): any[] => {
    if (data instanceof Array) {
        return data.sort(compareFn);
    }

    return Object.values(data).sort(compareFn);
};

/**
 * Select object value from keys.
 * @todo Handle for undefined value.
 */
export const selectObject = (data: JObject, keys: any[]): JObject => {
    const newObject = <JObject>{};

    each(keys, (k, _) => {
        newObject[k] = data[k];
    });

    return newObject;
};

/**
 * Deep clone array or object with data loss.
 * @note No support object with function.
 */
export function clone<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
}

export function sizeOf(data: any[] | JObject): number {
    return Object.keys(data).length;
}

export * from './validate';
