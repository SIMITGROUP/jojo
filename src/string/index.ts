import { startCase as _startCase, upperCase as _upperCase, lowerCase as _lowerCase } from 'lodash';

/**
 * Converts string to start case.
 * @param string
 * @returns
 * @see https://lodash.com/docs/4.17.15#startCase
 */
export function startCase(string: string): string {
    return _startCase(string);
}

/**
 * Converts string, as space separated words, to upper case.
 * @param string
 * @returns
 * @see https://lodash.com/docs/4.17.15#upperCase
 */
export function upperCase(string: string): string {
    return _upperCase(string);
}

/**
 * Converts string, as space separated words, to lower case.
 * @param string
 * @returns
 * @see https://lodash.com/docs/4.17.15#lowerCase
 */
export function lowerCase(string: string): string {
    return _lowerCase(string);
}

export function contains(string: string, substring: string): boolean {
    return string.includes(substring);
}


export * from './convert'
export * from './programmingCases'