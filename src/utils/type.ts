import { isObject as _isObject, isString as _isString, isNumber as _isNumber, isArray as _isArray } from 'lodash';

export const isObject = (value: any): value is object => {
    return _isObject(value);
};

export const isString = (value: any): value is string => {
    return _isString(value);
};

export const isNumber = (value: any): value is number => {
    return _isNumber(value);
};

export const isArray = (value: any): value is any[] => {
    return _isArray(value);
};
