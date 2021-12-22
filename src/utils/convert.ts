import { toNumber as _toNumber, round as _round, toString as _toString } from 'lodash';
import { isDefined, isUndefined } from '.';

/**
 * Convert value to number with precision
 * @param value
 * @returns
 * @see https://lodash.com/docs/4.17.15#toNumber
 */
export function toNumber(value: any, precision?: number): number {

    let result = _toNumber(value)
    if(isDefined(precision))
    {
        result = _round(result, precision)
    }

    return result;
}


/**
 * Convert value to string
 * @param value
 * @returns
 * @see https://lodash.com/docs/4.17.15#toString
 */
export function toString(value: any): string {
    return _toString(value)
}
