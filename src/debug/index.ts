export const log = (...args: unknown[]) => {
    console.log(...args)
}



export const debug = (key: string, ...args: unknown[]) => {
    console.log(`[Debug ${key}]: `, ...args)
}