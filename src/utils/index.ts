export * from './convert';

export * from './value';
export * from './type';

import { size as _size } from 'lodash'

export function size(data: any): number
{
    return _size(data)
}