/**
 * Split string to array by separator.
 * @param string 
 * @param separator 
 * @returns 
 */
export function split(string: string, separator: string): string[]
{
    return string.split(separator)
}

/**
 * Alias of split.
 * @param string 
 * @param separator 
 * @returns 
 */
export function explode(string: string, separator: string): string[]
{
    return split(string, separator)
}