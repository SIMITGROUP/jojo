import { isString } from "lodash";
import urljoin from 'url-join'

/**
 * Convert string / Window / Location to path string.
 * @param window 
 */
export function toPath(window: Window): string;
export function toPath(location: Location): string;
export function toPath(path: string): string;
export function toPath(param: unknown): string
{
    let path = 'No a valid path'

    if(isString(param))
    {
        path = param.replace(/\/$/, '')
    }


    if(param instanceof Location)
    {
        path = param.pathname.replace(/\/$/, '')
    }
    else if(param instanceof Window)
    {
        path = param.location.pathname.replace(/\/$/, '')
    }

    if(path[0] != '/')
    {
        path = '/' + path
    }
    

    return path
}

/**
 * Join path with url.
 * @param url 
 * @param path 
 * @returns 
 */
export function joinUrl(url: string, path: string): string
{
    return urljoin(url, path)
}

export function joinPath(...data: string[]): string
{
    const path = toPath(urljoin(data))
    return path
}