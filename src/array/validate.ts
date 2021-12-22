import { JObject } from '../@types/JObject';
import { isNotEmpty } from '../utils/value';

/**
 * Check key in array or object regarding is empty or undefined.
 * @param data
 * @param key
 * @returns
 */
export function exists(data: any[] | JObject, key: number | string): boolean {
    return key in data;
}

/**
 * Check key in array or object and it has a valid value.
 * @param data
 * @param key
 * @returns
 */
export function has(data: any[] | JObject, key: number | string): boolean {
    return exists(data, key) && isNotEmpty(data[key as any]);
}

/**
 * Check key is not in array or object.
 * @param data
 * @param key
 * @returns
 */
export function missing(data: any[] | JObject, key: number | string): boolean {
    return !exists(data, key);
}
