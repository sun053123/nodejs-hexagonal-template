//comon utils
export const isObject = (val: any): val is Object => val !== null && typeof val === 'object'
export const isFunction = (val: any): val is Function => typeof val === 'function'
export const isString = (val: any): val is string => typeof val === 'string'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isUndefined = (val: any): val is undefined => typeof val === 'undefined'
export const isNull = (val: any): val is null => val === null
export const isSymbol = (val: any): val is symbol => typeof val === 'symbol'
export const isDate = (val: any): val is Date => val instanceof Date
export const isRegExp = (val: any): val is RegExp => val instanceof RegExp
export const isPromise = (val: any): val is Promise<any> => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
export const isSet = (val: any): val is Set<any> => val instanceof Set
export const isMap = (val: any): val is Map<any, any> => val instanceof Map
export const isWeakMap = (val: any): val is WeakMap<any, any> => val instanceof WeakMap
export const isWeakSet = (val: any): val is WeakSet<any> => val instanceof WeakSet
export const isArray = (val: any): val is Array<any> => Array.isArray(val)
